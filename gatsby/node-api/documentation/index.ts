// @ts-nocheck
import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import { CreateNodeArgs, CreatePagesArgs, Node } from 'gatsby'

import locales, {
  defaultLocale,
  localeCodeList,
  LocaleCode,
  Locale
} from '../../../src/i18n/locales'
import { getLayout } from '../util/get-layout'

const IGNORED_FOLDERS = ['images']
const CUSTOMIZATION_FILE_NAME = 'customization.yaml'

function getLocaleSlugMap(mdxNode: Node, currentFolderNode) {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap = {}

  locales.forEach((locale) => {
    const localeFolderEntry =
      currentFolderNode.localeMap[locale.code] ||
      currentFolderNode.localeMap[defaultLocale.code]

    const config = localeFolderEntry.customization

    const breadcrumbs = getFolderNodeBreadcrumbs(currentFolderNode, locale)

    let fileName = path.basename(
      fileAbsolutePath,
      path.extname(fileAbsolutePath)
    )

    if (config.path_override === 'blog') {
      /** "20200129-article-title" -> "article-title" */
      fileName = fileName.slice(9)
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

function normalizePath(filePath: string): string {
  return filePath.split(path.sep).join(path.posix.sep)
}

interface FolderFiles {
  customization: Customization
  contentFiles: Array<string>
}

async function parseLocaleFolder(folderPath: string): Promise<FolderFiles> {
  const customization = await getCustomizationFromFolder(folderPath)
  const files = await fs.promises.readdir(folderPath, { withFileTypes: true })
  const contentFiles: Array<string> = files
    .filter((file) => file.isFile() && file.name !== CUSTOMIZATION_FILE_NAME)
    .map((file) => file.name)

  return {
    customization,
    contentFiles
  }
}

interface Folder {
  name: string
  path: string
  localeMap: {
    [K in LocaleCode]?: FolderFiles
  }
  parent?: Folder
  children: Array<Folder>
}

async function parseFolderRecursively(
  pathToFolder: string,
  folderName: string,
  parentNode?: Folder
): Promise<Folder> {
  const currentNode: Folder = {
    name: folderName,
    path: path.join(pathToFolder, folderName),
    localeMap: {},
    parent: parentNode,
    children: []
  }

  const files = await fs.promises.readdir(currentNode.path, {
    withFileTypes: true
  })

  const promises = files.map(async (file) => {
    if (!file.isDirectory() || IGNORED_FOLDERS.includes(file.name)) {
      return
    }

    if (localeCodeList.includes(file.name)) {
      const localeFolderPath = path.join(currentNode.path, file.name)
      currentNode.localeMap[file.name] = await parseLocaleFolder(
        localeFolderPath
      )
    } else {
      const childNode: Folder = await parseFolderRecursively(
        currentNode.path,
        file.name,
        currentNode
      )

      currentNode.children.push(childNode)
    }
  })

  await Promise.all(promises)

  return currentNode
}

function getFoldersWithMdxFiles(parsedContent: Folder) {
  const mdxDirectories = []

  function getMdxDirectoryFromNode(folderNode: Folder, locale: Locale) {
    const localeEntry = folderNode.localeMap[locale.code]

    if (localeEntry && localeEntry.contentFiles.length > 0) {
      const directoryPath = path.join(folderNode.path, locale.code)
      mdxDirectories.push({ path: directoryPath, locale, node: folderNode })
    }

    folderNode.children.forEach((childNode) =>
      getMdxDirectoryFromNode(childNode, locale)
    )
  }

  locales.forEach((locale) => getMdxDirectoryFromNode(parsedContent, locale))

  return mdxDirectories
}

function getFolderNodeBreadcrumbs(folderNode, locale) {
  const breadcrumbs = []

  let currentNode = folderNode

  while (currentNode) {
    const { customization } =
      currentNode.localeMap[locale.code] ||
      currentNode.localeMap[defaultLocale.code]

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

interface Customization {
  path_override?: string
  name?: string
}

async function getCustomizationFromFolder(
  folderPath: string
): Promise<Customization> {
  try {
    const filePath = path.join(folderPath, CUSTOMIZATION_FILE_NAME)
    const fileContent: string = await fs.promises.readFile(filePath, {
      encoding: 'utf-8'
    })
    return (yaml.safeLoad(fileContent) || {}) as Customization
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {}
    } else {
      throw error
    }
  }
}

function findFolderNodeByFilePath(rootNode, fileAbsolutePath) {
  function normalizePath(filePath) {
    return filePath.split(path.sep).join(path.posix.sep)
  }

  function recursiveSearchByPath(folderNode: Folder): Folder | null {
    if (fileAbsolutePath.startsWith(normalizePath(folderNode.path))) {
      for (let locale of locales) {
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

  return recursiveSearchByPath(rootNode)
}

function getContentLangFromPath(relativePath): LocaleCode {
  const contentLocale = locales.find((locale) => {
    const langPath = path.posix.sep + locale.code + path.posix.sep
    return relativePath.includes(langPath)
  })

  return contentLocale ? contentLocale.code : defaultLocale.code
}

function createPageFromMdxNode(
  node,
  folderNode: Folder,
  locale: Locale,
  actions
): void {
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = path.join(parentDirectory, 'images')
  const breadcrumbs = getFolderNodeBreadcrumbs(folderNode, locale)

  const folderFiles =
    folderNode.localeMap[locale.code] ||
    folderNode.localeMap[defaultLocale.code]
  if (!folderFiles) return

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  const slug =
    fields.localeSlugMap[locale.code] ||
    fields.localeSlugMap[defaultLocale.code]

  actions.createPage({
    /** Any valid URL. Must start with a forward slash */
    path: (locale.default ? `` : `/${locale.code}`) + slug,
    component: getLayout(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: normalizePath(`${currentDirectory}/*`) },
        frontmatter: { layout: { eq: 'documentation' } }
      },
      imagesPath: normalizePath(`${pathToImages}/**/*`),
      breadcrumbs,
      meta,
      config: folderFiles.customization,
      lang: locale.code,
      relativePath
    }
  })

  /** For every other locale, fallback to content in default locale, if available. */
  if (locale.default) {
    const fileName = path.basename(fileAbsolutePath)

    locales
      .filter((locale) => !locale.default)
      .forEach((nonDefaultLocale) => {
        const localeFolderEntry = folderNode.localeMap[nonDefaultLocale.code]
        const contentFiles = localeFolderEntry
          ? localeFolderEntry.contentFiles
          : []
        const isContainsFile = contentFiles.includes(fileName)

        if (!isContainsFile) {
          createPageFromMdxNode(node, folderNode, nonDefaultLocale, actions)
        }
      })
  }
}

export async function createPages({ graphql, actions }: CreatePagesArgs) {
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

  const parsedContent = await parseFolderRecursively(process.cwd(), 'content')

  const foldersWithMdxFiles = getFoldersWithMdxFiles(parsedContent)

  await Promise.all(
    foldersWithMdxFiles.map((folder) => {
      const regex = new RegExp(`${normalizePath(folder.path)}/*`)

      data.allMdx.nodes
        .filter((node) => node.fileAbsolutePath.match(regex))
        .forEach((node) =>
          createPageFromMdxNode(node, folder.node, folder.locale, actions)
        )
    })
  )
}

export const onCreateNode = (function () {
  const parsedContentPromise = parseFolderRecursively(process.cwd(), 'content')

  async function onCreateNode({ node, actions }: CreateNodeArgs) {
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
