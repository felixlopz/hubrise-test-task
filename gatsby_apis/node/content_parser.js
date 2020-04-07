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

/**
 * @typedef {Object} LocaleEntry
 * @property {object} customization
 * @property {string[]} contentFiles
 */

/**
 * @param {string} folderPath
 * @returns {Promise<LocaleEntry>}
 */
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
 * @typedef {Object} Locale
 * @property {string} code
 * @property {string} tag
 * @property {boolean} [default]
 */

/**
 * @typedef {Object} FolderNode
 * @property {string} name
 * @property {string} path
 * @property {object} localeMap
 * @property {null | FolderNode} parent
 * @property {FolderNode[]} children
 */

/**
 * @param {object} params
 * @param {string} params.pathToFolder
 * @param {string} params.folderName
 * @param {string[]} params.localeCodeList
 * @param {null | FolderNode} params.parentNode
 * @returns {Promise<FolderNode>} parsedContent
 */
async function parseFolderRecursively({
  pathToFolder,
  folderName,
  localeCodeList,
  parentNode = null
}) {
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
      const childNode = await parseFolderRecursively({
        pathToFolder: currentNode.path,
        folderName: file.name,
        localeCodeList,
        parentNode: currentNode
      })

      currentNode.children.push(childNode)
    }
  })

  await Promise.all(promises)

  // console.log(
  //   util.inspect(
  //     {
  //       name: currentNode.name,
  //       path: currentNode.path,
  //       localeMap: currentNode.localeMap
  //     },
  //     { colors: true, depth: 25 }
  //   )
  // )

  return currentNode
}

exports.parseFolderRecursively = parseFolderRecursively

/**
 *
 * @param {FolderNode} parsedContent
 * @param {object} locales
 *
 * @returns {object[]} mdxDirectories
 */
function getDirectoriesWithMdxFiles(parsedContent, locales) {
  const mdxDirectories = []

  const defaultLocale = Object.values(locales).find((locale) => locale.default)

  /**
   * @param {FolderNode} folderNode
   * @param {Locale} locale
   */
  function getMdxDirectoryFromNode(folderNode, locale) {
    const localeEntry = folderNode.localeMap[locale.code]
    const defaultLocaleEntry = folderNode.localeMap[defaultLocale.code]

    if (localeEntry && localeEntry.contentFiles.length > 0) {
      const directoryPath = path.join(folderNode.path, locale.code)
      mdxDirectories.push({ path: directoryPath, locale })
    } else if (
      !locale.default &&
      defaultLocaleEntry &&
      defaultLocaleEntry.contentFiles.length > 0
    ) {
      /** For every other locale, fallback to content in default locale, if available. */
      const directoryPath = path.join(folderNode.path, defaultLocale.code)
      mdxDirectories.push({ path: directoryPath, locale })
    }

    folderNode.children.forEach((childNode) =>
      getMdxDirectoryFromNode(childNode, locale)
    )
  }

  Object.values(locales).forEach((locale) =>
    getMdxDirectoryFromNode(parsedContent, locale)
  )

  return mdxDirectories
}

exports.getDirectoriesWithMdxFiles = getDirectoriesWithMdxFiles
