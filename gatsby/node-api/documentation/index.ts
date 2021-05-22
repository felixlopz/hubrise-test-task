// @ts-nocheck
import * as path from 'path'
import * as Gatsby from 'gatsby'

import locales, {
  LocaleCode,
  localeCodes,
  defaultLocaleCode
} from '../../../src/utils/locales'
import {
  findFolderNodeByFilePath,
  Folder,
  getLocaleCodeFromPath,
  normalizePath,
  parseFolderRecursively
} from './folder'
import { createPageFromMdxNode } from './page'
import { getFolderBreadcrumbs } from './breadcrumbs'

function getLocaleSlugMap(mdxNode: Gatsby.Node, currentFolderNode: Folder) {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap = {}

  localeCodes.forEach((localeCode) => {
    const localeFolderFiles =
      currentFolderNode.localeMap[localeCode] ||
      currentFolderNode.localeMap[defaultLocaleCode]

    const config = localeFolderFiles.customization

    const breadcrumbs = getFolderBreadcrumbs(currentFolderNode, localeCode)

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

interface MdxDirectory {
  path: string
  locale: any
  node: Folder
}

function getMdxDirectories(rootFolder: Folder): Array<MdxDirectory> {
  const mdxDirectories: Array<MdxDirectory> = []

  function addRecursively(folder: Folder, localeCode: LocaleCode): void {
    const localeEntry = folder.localeMap[localeCode]

    if (localeEntry && localeEntry.contentFileNames.length > 0) {
      const directoryPath = path.join(folder.path, localeCode)
      const locale = locales.find((theLocale) => theLocale.code === localeCode)
      mdxDirectories.push({ path: directoryPath, locale, node: folder })
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

  const rootFolder = await parseFolderRecursively(process.cwd(), 'content')
  const mdxDirectories = getMdxDirectories(rootFolder)

  await Promise.all(
    mdxDirectories.map((mdxDirectory) => {
      const regex = new RegExp(`${normalizePath(mdxDirectory.path)}/*`)

      data.allMdx.nodes
        .filter((node) => node.fileAbsolutePath.match(regex))
        .forEach((node) =>
          createPageFromMdxNode(
            node,
            mdxDirectory.node,
            mdxDirectory.locale.code,
            actions
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
      const { fileAbsolutePath } = node

      const rootFolder = await rootFolderPromise
      const currentFolderNode = findFolderNodeByFilePath(
        rootFolder,
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
