const fs = require('fs')
const util = require('util')
const path = require('path')
const yaml = require('js-yaml')

const fsReaddir = util.promisify(fs.readdir)
const fsReadFile = util.promisify(fs.readFile)

const IGNORED_FOLDERS = ['images']
const CUSTOMIZATION_FILE_NAME = 'customization.yaml'

function getCustomizationFromFolder(folderPath) {
  const filePath = path.join(folderPath, CUSTOMIZATION_FILE_NAME)
  return fsReadFile(filePath, { encoding: 'utf-8' }).then((fileContent) => {
    return yaml.safeLoad(fileContent) || {}
  })

  // .catch((error) => {
  //   if (error.code === 'ENOENT') {
  //     return {}
  //   } else {
  //     return Promise.reject(error)
  //   }
  // })
}

async function parseLocaleFolder(folderPath) {
  const customization = getCustomizationFromFolder(folderPath)
  const files = await fsReaddir(folderPath, { withFileTypes: true })
  const contentFiles = files
    .filter((file) => file.isFile() && file.name !== CUSTOMIZATION_FILE_NAME)
    .map((file) => file.name)

  return {
    customization,
    contentFiles
  }
}

/**
 * @param {string} pathToFolder
 * @param {string} folderName
 * @param {string[]} localeCodeList
 * @param {null | object} parentNode
 */
async function parseFolderRecursively(
  pathToFolder,
  folderName,
  localeCodeList,
  parentNode = null
) {
  const currentNode = {
    name: folderName,
    path: path.join(pathToFolder, folderName),
    localeMap: {},
    parent: parentNode,
    children: []
  }

  const files = await fsReaddir(currentNode.path, { withFileTypes: true })

  const promises = files.map(async (file) => {
    if (!file.isDirectory() || IGNORED_FOLDERS.includes(file.name)) {
      return
    }

    if (localeCodeList.includes(file.name)) {
      const localeFolderPath = path.join(currentNode.path, file.name)
      const localeEntry = await parseLocaleFolder(localeFolderPath)

      currentNode.localeMap[file.name] = localeEntry
    } else {
      const childNode = await parseFolderRecursively(
        currentNode.path,
        file.name,
        localeCodeList,
        currentNode
      )

      currentNode.children.push(childNode)
    }
  })

  await Promise.all(promises)

  console.log(
    util.inspect(
      {
        name: currentNode.name,
        path: currentNode.path,
        localeMap: currentNode.localeMap
      },
      { colors: true, depth: 25 }
    )
  )

  return currentNode
}

exports.parseFolder = parseFolderRecursively
