import { Actions } from 'gatsby'

import { Folder, FolderFiles, getFolderFiles, getFolderPath } from './folder'
import { LocaleCode, localeCodes } from '../../../src/utils/locales'
import { MDXDocumentationNode } from '../../../src/data/mdx'
import { DocumentationContext } from '../../../src/data/context'
import { getLayoutPath } from '../util/layout'
import { getBreadcrumbs } from './breadcrumbs'

export function createDocumentationPagesInFolder(
  actions: Actions,
  folder: Folder
): void {
  for (let localeCode of localeCodes) {
    const folderFiles = getFolderFiles(folder, localeCode)
    if (!folderFiles) continue

    for (let mdxNode of folderFiles.mdxNodes) {
      createDocumentationPage(actions, folder, localeCode, folderFiles, mdxNode)
    }
  }

  for (let childFolder of folder.children) {
    createDocumentationPagesInFolder(actions, childFolder)
  }
}

function createDocumentationPage(
  actions: Actions,
  folder: Folder,
  localeCode: LocaleCode,
  folderFiles: FolderFiles,
  mdxNode: MDXDocumentationNode
) {
  const path = getPagePath(folder, mdxNode, localeCode)
  const breadcrumbs = getBreadcrumbs(
    folder,
    localeCode,
    mdxNode.frontmatter.title
  )

  const folderPages = getFolderPages(folder, folderFiles, localeCode)
  const customization = folderFiles.customization

  actions.createPage<DocumentationContext>({
    path,
    component: getLayoutPath('documentation'),
    context: {
      breadcrumbs,
      localeCode,
      folderPages,
      imageSharpMap: folder.imageSharpMap,
      logoImageName: customization.logo,
      folderTitle: customization.name,
      mdxNode
    }
  })
}

/**
 * Returns the path of a documentation page on the website with a leading slash (eg "/fr/deliveroo/map-ref-codes").
 * @param folder: the folder containing the MDX node
 * @param mdxNode: the MDX node
 * @param localeCode: the locale of the page
 */
function getPagePath(
  folder: Folder,
  mdxNode: MDXDocumentationNode,
  localeCode: LocaleCode
): string {
  const path = getFolderPath(folder, localeCode)

  const name = mdxNode.frontmatter.path_override || mdxNode.parent.name

  if (name === '/') {
    return path
  } else {
    return `${path}/${name}`
  }
}

export interface FolderPage {
  path: string
  title: string
}

function getFolderPages(
  folder: Folder,
  folderFiles: FolderFiles,
  localeCode: LocaleCode
): Array<FolderPage> {
  return folderFiles.mdxNodes.map((mdxNode) => {
    return {
      path: getPagePath(folder, mdxNode, localeCode),
      title: mdxNode.frontmatter.title
    }
  })
}
