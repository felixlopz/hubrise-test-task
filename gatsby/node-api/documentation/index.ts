// @ts-nocheck
import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'
import { CreateNodeArgs, CreatePagesArgs, Node } from 'gatsby'

import locales, {
  LocaleCode,
  localeCodes,
  defaultLocaleCode
} from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../../../src/utils/urls'

const IGNORED_FOLDERS = ['images']
const CUSTOMIZATION_FILE_NAME = 'customization.yaml'

function getLocaleSlugMap(mdxNode: Node, currentFolderNode: Folder) {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap = {}

  localeCodes.forEach((localeCode) => {
    const localeFolderFiles =
      currentFolderNode.localeMap[localeCode] ||
      currentFolderNode.localeMap[defaultLocaleCode]

    const config = localeFolderFiles.customization

    const breadcrumbs = getFolderNodeBreadcrumbs(currentFolderNode, localeCode)

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

    localeSlugMap[localeCode] = slug
  })

  return localeSlugMap
}

function normalizePath(filePath: string): string {
  return filePath.split(path.sep).join(path.posix.sep)
}

interface FolderFiles {
  customization: Customization
  contentFileNames: Array<string>
}

async function parseLocaleFolder(folderPath: string): Promise<FolderFiles> {
  const customization = await getCustomizationFromFolder(folderPath)
  const files = await fs.promises.readdir(folderPath, { withFileTypes: true })
  const contentFileNames: Array<string> = files
    .filter((file) => file.isFile() && file.name !== CUSTOMIZATION_FILE_NAME)
    .map((file) => file.name)

  return {
    customization,
    contentFileNames
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

    if (localeCodes.includes(file.name)) {
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

  function getMdxDirectoryFromNode(folderNode: Folder, localeCode: LocaleCode) {
    const localeEntry = folderNode.localeMap[localeCode]

    if (localeEntry && localeEntry.contentFileNames.length > 0) {
      const directoryPath = path.join(folderNode.path, localeCode)
      const locale = locales.find((theLocale) => theLocale.code === localeCode)
      mdxDirectories.push({ path: directoryPath, locale, node: folderNode })
    }

    folderNode.children.forEach((childNode) =>
      getMdxDirectoryFromNode(childNode, localeCode)
    )
  }

  localeCodes.forEach((localeCode) =>
    getMdxDirectoryFromNode(parsedContent, localeCode)
  )

  return mdxDirectories
}

function getFolderNodeBreadcrumbs(folderNode: Folder, localeCode: LocaleCode) {
  const breadcrumbs = []

  let currentNode = folderNode

  while (currentNode) {
    const { customization } =
      currentNode.localeMap[localeCode] ||
      currentNode.localeMap[defaultLocaleCode]

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
      for (let localeCode of localeCodes) {
        const localeFolderPath = path.join(folderNode.path, localeCode)
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

function getLocaleCodeFromPath(relativePath): LocaleCode {
  return (
    localeCodes.find((localeCode) =>
      relativePath.includes(path.posix.sep + localeCode + path.posix.sep)
    ) || defaultLocaleCode
  )
}

function createPageFromMdxNode(
  node,
  folderNode: Folder,
  localeCode: LocaleCode,
  actions
): void {
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = path.join(parentDirectory, 'images')
  const breadcrumbs = getFolderNodeBreadcrumbs(folderNode, localeCode)

  const folderFiles =
    folderNode.localeMap[localeCode] || folderNode.localeMap[defaultLocaleCode]
  if (!folderFiles) return

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  const slug =
    fields.localeSlugMap[localeCode] || fields.localeSlugMap[defaultLocaleCode]

  actions.createPage({
    /** Any valid URL. Must start with a forward slash */
    path: pathWithLocale(localeCode, slug),
    component: getLayoutPath(layout),
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
      lang: localeCode,
      relativePath
    }
  })

  if (localeCode === defaultLocaleCode) {
    /** For every other locale, fallback to content in default locale, if available. */
    const fileName = path.basename(fileAbsolutePath)
    const otherLocaleCodes = localeCodes.filter(
      (localeCode) => localeCode !== defaultLocaleCode
    )
    for (let otherLocaleCode of otherLocaleCodes) {
      const contentFileNames =
        folderNode.localeMap[otherLocaleCode]?.contentFileNames || []
      if (!contentFileNames.includes(fileName)) {
        createPageFromMdxNode(node, folderNode, otherLocaleCode, actions)
      }
    }
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
          createPageFromMdxNode(node, folder.node, folder.locale.code, actions)
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

      const localeCode = getLocaleCodeFromPath(fileAbsolutePath)
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
