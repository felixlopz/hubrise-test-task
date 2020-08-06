const fs = require('fs')
const util = require('util')
const path = require('path')
const yaml = require('js-yaml')
const { flatten } = require('lodash')

const locales = require('../../i18n/locales')
const LOCALE_LIST = Object.values(locales)
const DEFAULT_LOCALE = LOCALE_LIST.find((locale) => locale.default)
const LOCALE_CODE_LIST = LOCALE_LIST.map((locale) => locale.code)

const { getLayout } = require(`../get-layout`)

const fsReaddir = util.promisify(fs.readdir)
const fsReadFile = util.promisify(fs.readFile)

const IGNORED_FOLDERS = ['images']
const CUSTOMIZATION_FILE_NAME = 'customization.yaml'

function getLocaleSlugMap(mdxNode, currentFolderNode) {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap = {}

  Object.values(locales).forEach((locale) => {
    const localeFolderEntry =
      currentFolderNode.localeMap[locale.code] ||
      currentFolderNode.localeMap[DEFAULT_LOCALE.code]

    const config = localeFolderEntry.customization

    const breadcrumbs = getFolderNodeBreadcrumbs(currentFolderNode, locale)

    let fileName = path.basename(
      fileAbsolutePath,
      path.extname(fileAbsolutePath)
    )

    if (config.path_override === 'blog') {
      /** "2020-01-29_article-title" -> "article-title" */
      fileName = fileName.slice(11)
    }

    let slug = [
      ...breadcrumbs.map((breadcrumb) => breadcrumb.value),
      frontmatter.path_override ? frontmatter.path_override : fileName
    ]
      .filter((part) => part !== '/')
      .join('/')
      .replace(/_/g, `-`)

    slug = slug ? `/${slug}/` : '/'

    localeSlugMap[locale.code] = slug
  })

  return localeSlugMap
}

/**
 * Checks whether a given path is a directory.
 */
const isDirectory = (path) => fs.lstatSync(path).isDirectory()

/**
 * Retrieves subdirectories in a given path.
 */
const getDirectories = (srcPath) => {
  return fs
    .readdirSync(srcPath)
    .map((item) => path.join(srcPath, item))
    .filter(isDirectory)
}

/**
 * Retrieves all subdirectories in a given path, including nested ones.
 */
const getDirectoriesRecursive = (path) => {
  return [path, ...flatten(getDirectories(path).map(getDirectoriesRecursive))]
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join(path.posix.sep)
}

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

function getFoldersWithMdxFiles(parsedContent, locales) {
  const mdxDirectories = []

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

function getFolderNodeBreadcrumbs(folderNode, locale) {
  const breadcrumbs = []

  let currentNode = folderNode

  while (currentNode !== null) {
    const { customization } =
      currentNode.localeMap[locale.code] ||
      currentNode.localeMap[DEFAULT_LOCALE.code]

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

function findFolderNodeByFilePath(rootNode, fileAbsolutePath) {
  function normalizePath(filePath) {
    return filePath.split(path.sep).join(path.posix.sep)
  }

  function recursiveSearchByPath(folderNode) {
    if (fileAbsolutePath.startsWith(normalizePath(folderNode.path))) {
      for (let locale of LOCALE_LIST) {
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

function createPageFromMdxNode({ node, folderNode, locale, actions }) {
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = path.join(parentDirectory, 'images')
  const breadcrumbs = getFolderNodeBreadcrumbs(folderNode, locale)

  const config = (
    folderNode.localeMap[locale.code] ||
    folderNode.localeMap[DEFAULT_LOCALE.code]
  ).customization

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  const slug =
    fields.localeSlugMap[locale.code] ||
    fields.localeSlugMap[DEFAULT_LOCALE.code]

  actions.createPage({
    /** Any valid URL. Must start with a forward slash */
    path: (locale.default ? `` : `/${locale.code}`) + slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: normalizePath(`${currentDirectory}/*`) }
      },
      imagesFilter: {
        absolutePath: { glob: normalizePath(`${pathToImages}/**/*`) },
        extension: { regex: '/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/' }
      },
      breadcrumbs,
      meta,
      config,
      lang: locale.code,
      relativePath
    }
  })

  /** For every other locale, fallback to content in default locale, if available. */
  if (locale.default) {
    const fileName = path.basename(fileAbsolutePath)

    LOCALE_LIST.filter((locale) => !locale.default).forEach(
      (nonDefaultLocale) => {
        const localeFolderEntry = folderNode.localeMap[nonDefaultLocale.code]
        const contentFiles = localeFolderEntry
          ? localeFolderEntry.contentFiles
          : []
        const isContainsFile = contentFiles.includes(fileName)

        if (!isContainsFile) {
          createPageFromMdxNode({
            node,
            folderNode,
            locale: nonDefaultLocale,
            actions
          })
        }
      }
    )
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
            localeSlugMap {
              en
              fr
            }
          }
          frontmatter {
            layout
            gallery
            path_override
            meta {
              description
              title
            }
          }
        }
      }
    }
  `)

  if (errors) throw errors

  const parsedContent = await parseFolderRecursively({
    pathToFolder: process.cwd(),
    folderName: 'content'
  })

  const foldersWithMdxFiles = getFoldersWithMdxFiles(parsedContent, locales)

  await Promise.all(
    foldersWithMdxFiles.map((folder) => {
      const regex = new RegExp(`${normalizePath(folder.path)}/*`)

      data.allMdx.nodes
        .filter((node) => node.fileAbsolutePath.match(regex))
        .forEach((node) =>
          createPageFromMdxNode({
            node,
            locale: folder.locale,
            folderNode: folder.node,
            actions
          })
        )
    })
  )
}

exports.onCreateNode = (function () {
  const parsedContentPromise = parseFolderRecursively({
    pathToFolder: process.cwd(),
    folderName: 'content'
  })

  async function onCreateNode({ node, actions }) {
    if (node.internal.type === `Mdx`) {
      const { createNodeField } = actions
      const { fileAbsolutePath } = node

      const parsedContent = await parsedContentPromise
      const currentFolderNode = findFolderNodeByFilePath(
        parsedContent,
        fileAbsolutePath
      )

      const localeCode = getContentLangFromPath(fileAbsolutePath)
      const localeSlugMap = getLocaleSlugMap(node, currentFolderNode)

      createNodeField({
        node,
        name: `slug`,
        value: localeSlugMap[localeCode]
      })

      createNodeField({
        node,
        name: `localeSlugMap`,
        value: localeSlugMap
      })

      createNodeField({
        node,
        name: `contentLang`,
        value: localeCode
      })
    }
  }

  return onCreateNode
})()
