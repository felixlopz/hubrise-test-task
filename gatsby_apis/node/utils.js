const fs = require('fs')
const util = require('util')
const path = require('path')
const yaml = require('js-yaml')
const { flatten } = require('lodash')
const locales = require('../../src/i18n/locales')

const fsReaddir = util.promisify(fs.readdir)
const fsReadFile = util.promisify(fs.readFile)

const IGNORED_FOLDERS = ['images']
const CUSTOMIZATION_FILE_NAME = 'customization.yaml'
const LOCALE_CODE_LIST = Object.values(locales).map((locale) => locale.code)

/**
 * Checks whether a given path is a directory.
 *
 * @param   {string} path
 * @returns {Boolean}
 */
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

/**
 * Retrives subdirectories in a given path.
 *
 * @param   {string} srcPath
 * @returns {Array<string>} List of paths to subdirectories.
 */
const getDirectories = (srcPath) => {
  return fs
    .readdirSync(srcPath)
    .map((item) => path.join(srcPath, item))
    .filter(isDirectory)
}

/**
 * Retrieves all subdirectories in a given path, including nested ones.
 *
 * @param   {string} path
 * @returns {Array<string>} List of paths to all subdirectories.
 */
const getDirectoriesRecursive = (path) => {
  return [path, ...flatten(getDirectories(path).map(getDirectoriesRecursive))]
}

/**
 * Retrieves default locale object.
 *
 * @returns {Locale | undefined}
 */
function getDefaultLocale() {
  return Object.values(locales).find((locale) => locale.default)
}

/**
 * @returns {Array<Locale>} localeList
 */
function getLocaleList() {
  return Object.values(locales)
}

/**
 * @param {string} folderPath
 * @returns {Promise<object>}
 */
function getCustomizationFromFolder(folderPath) {
  const filePath = path.join(folderPath, CUSTOMIZATION_FILE_NAME)
  return fsReadFile(filePath, { encoding: 'utf-8' })
    .then((fileContent) => {
      return yaml.safeLoad(fileContent) || {}
    })
    .catch((error) => {
      if (error.code === 'ENOENT') {
        return {}
      } else {
        return Promise.reject(error)
      }
    })
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
  const customization = await getCustomizationFromFolder(folderPath)
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
 * @param {null | FolderNode} params.parentNode
 * @returns {Promise<FolderNode>} parsedContent
 */
async function parseFolderRecursively({
  pathToFolder,
  folderName,
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

    if (LOCALE_CODE_LIST.includes(file.name)) {
      const localeFolderPath = path.join(currentNode.path, file.name)
      const localeEntry = await parseLocaleFolder(localeFolderPath)

      currentNode.localeMap[file.name] = localeEntry
    } else {
      const childNode = await parseFolderRecursively({
        pathToFolder: currentNode.path,
        folderName: file.name,
        parentNode: currentNode
      })

      currentNode.children.push(childNode)
    }
  })

  await Promise.all(promises)

  return currentNode
}

/**
 *
 * @param {FolderNode} parsedContent
 * @param {object} locales
 *
 * @returns {object[]} mdxDirectories
 */
function getFoldersWithMdxFiles(parsedContent, locales) {
  const mdxDirectories = []

  /**
   * @param {FolderNode} folderNode
   * @param {Locale} locale
   */
  function getMdxDirectoryFromNode(folderNode, locale) {
    const localeEntry = folderNode.localeMap[locale.code]

    if (localeEntry && localeEntry.contentFiles.length > 0) {
      const directoryPath = path.join(folderNode.path, locale.code)
      mdxDirectories.push({ path: directoryPath, locale, node: folderNode })
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

/**
 * @param {FolderNode} folderNode
 * @param {Locale} locale
 * @returns {array} breadcrumbs
 */
function getFolderNodeBreadcrumbs(folderNode, locale) {
  const breadcrumbs = []

  let currentNode = folderNode

  while (currentNode !== null) {
    const { customization } =
      currentNode.localeMap[locale.code] ||
      currentNode.localeMap[getDefaultLocale().code]

    if (customization.path_override) {
      const breadcrumb = {
        value: customization.path_override,
        label: customization.name
      }
      breadcrumbs.unshift(breadcrumb)
    }
    currentNode = currentNode.parent
  }

  return breadcrumbs
}

/**
 * @param {FolderNode} rootNode
 * @param {string} fileAbsolutePath
 * @returns {FolderNode | null}
 */
function findFolderNodeByFilePath(rootNode, fileAbsolutePath) {
  function normalizePath(filePath) {
    return filePath.split(path.sep).join(path.posix.sep)
  }

  function recursiveSearchByPath(folderNode) {
    // console.log(
    //   'compare paths:',
    //   fileAbsolutePath,
    //   normalizePath(folderNode.path)
    // )
    if (fileAbsolutePath.startsWith(normalizePath(folderNode.path))) {
      // console.log('compare paths success')
      for (let locale of getLocaleList()) {
        const localeFolderPath = path.join(folderNode.path, locale.code)
        if (fileAbsolutePath.startsWith(normalizePath(localeFolderPath))) {
          return folderNode
        }
      }

      if (folderNode.children.length > 0) {
        for (let childNode of folderNode.children) {
          const foundNode = recursiveSearchByPath(childNode)
          if (foundNode) return foundNode
        }
      }
    }

    return null
  }

  return recursiveSearchByPath(rootNode, fileAbsolutePath)
}

function getContentLangFromPath(relativePath) {
  const defaultLocale = Object.values(locales).find((locale) => locale.default)
  const defaultLang = defaultLocale ? defaultLocale.code : 'en'

  const contentLocale = Object.values(locales).find((locale) => {
    const langPath = path.posix.sep + locale.code + path.posix.sep
    return relativePath.includes(langPath)
  })

  return contentLocale ? contentLocale.code : defaultLang
}

module.exports = {
  isDirectory,
  getDefaultLocale,
  getDirectories,
  getDirectoriesRecursive,
  getContentLangFromPath,
  getFoldersWithMdxFiles,
  parseFolderRecursively,
  findFolderNodeByFilePath,
  getFolderNodeBreadcrumbs,
  getLocaleList
}
