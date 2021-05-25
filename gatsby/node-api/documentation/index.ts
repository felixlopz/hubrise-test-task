import * as path from 'path'
import * as Gatsby from 'gatsby'

import locales, {
  LocaleCode,
  localeCodes,
  defaultLocaleCode
} from '../../../src/utils/locales'
import {
  folderByFilePath,
  Folder,
  getLocaleCodeFromPath,
  normalizePath,
  parseFolderRecursively
} from './folder'
import { createDocumentationPage } from './page'
import { getFolderBreadcrumbs } from './breadcrumbs'
import { MDXNode } from '../../../src/data/mdx'
import { getAllMDXNodes } from './graphql'

interface LocaleSlugMap {
  en?: string
  fr?: string
  // Replace with the following once https://github.com/microsoft/TypeScript/pull/26797 is merged:
  // [K: LocaleCode]: string
}

function getLocaleSlugMap(mdxNode: MDXNode, folder: Folder): LocaleSlugMap {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap: LocaleSlugMap = {}

  localeCodes.forEach((localeCode) => {
    const localeFolderFiles =
      folder.localeMap[localeCode] || folder.localeMap[defaultLocaleCode]
    if (!localeFolderFiles)
      throw `Cannot find FolderFiles for folder ${folder.path}`

    let fileName = path.basename(
      fileAbsolutePath,
      path.extname(fileAbsolutePath)
    )
    const breadcrumbs = getFolderBreadcrumbs(folder, localeCode)

    if (localeFolderFiles.customization.path_override === 'blog') {
      /** "20200129-article-title" -> "article-title" */
      fileName = fileName.slice(9)
    }

    let slug = [
      ...breadcrumbs.map((breadcrumb) => breadcrumb.path),
      frontmatter?.path_override || fileName
    ]
      .filter((part) => part !== '/')
      .join('/')
      .replace(/_/g, `-`)

    slug = slug ? `/${slug}/` : '/'

    localeSlugMap[localeCode] = slug
  })

  return localeSlugMap
}

interface MdxDirectory {
  path: string
  locale: any
  folder: Folder
}

function getMdxDirectories(rootFolder: Folder): Array<MdxDirectory> {
  const mdxDirectories: Array<MdxDirectory> = []

  function addRecursively(folder: Folder, localeCode: LocaleCode): void {
    const localeEntry = folder.localeMap[localeCode]

    if (localeEntry && localeEntry.contentFileNames.length > 0) {
      const directoryPath = path.join(folder.path, localeCode)
      const locale = locales.find((theLocale) => theLocale.code === localeCode)
      mdxDirectories.push({ path: directoryPath, locale, folder: folder })
    }

    folder.children.forEach((childNode) =>
      addRecursively(childNode, localeCode)
    )
  }

  for (let localeCode of localeCodes) {
    addRecursively(rootFolder, localeCode)
  }

  return mdxDirectories
}

export const createPages = async ({
  graphql,
  actions
}: Gatsby.CreatePagesArgs) => {
  const allMDXNodes = await getAllMDXNodes(graphql)
  const rootFolder = await parseFolderRecursively(process.cwd(), 'content')
  const mdxDirectories = getMdxDirectories(rootFolder)

  await Promise.all(
    mdxDirectories.map((mdxDirectory) => {
      const regex = new RegExp(`${normalizePath(mdxDirectory.path)}/*`)

      allMDXNodes
        .filter((mdxNode) => mdxNode.fileAbsolutePath.match(regex))
        .forEach((mdxNode) =>
          createDocumentationPage(
            mdxNode,
            mdxDirectory.folder,
            mdxDirectory.locale.code,
            actions.createPage
          )
        )
    })
  )
}

export const onCreateNode = (function () {
  const rootFolderPromise = parseFolderRecursively(process.cwd(), 'content')

  async function onCreateNode({ node, actions }: Gatsby.CreateNodeArgs) {
    if (node.internal.type === `Mdx`) {
      const { createNodeField } = actions
      const mdxNode = (node as any) as MDXNode

      const { fileAbsolutePath } = mdxNode

      const rootFolder = await rootFolderPromise
      const folder = folderByFilePath(rootFolder, fileAbsolutePath)
      if (!folder) throw `Cannot generate Folder for file ${fileAbsolutePath}`

      const localeCode = getLocaleCodeFromPath(fileAbsolutePath)
      const localeSlugMap = getLocaleSlugMap(mdxNode, folder)

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
