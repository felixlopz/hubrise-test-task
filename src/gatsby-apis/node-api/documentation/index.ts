import * as Gatsby from 'gatsby'

import { generateCustomizationMap } from './customization'
import {
  Folder,
  FolderFiles,
  generateFolders,
  getFolderFiles,
  getImagesRelativeDirectory,
  MDXDocumentationNode
} from './folder'
import { getFolderPages, getPagePath } from './page'
import { Actions } from 'gatsby'
import { getBreadcrumbs } from './breadcrumbs'
import { getLayoutPath } from '../util/layout'
import { LocaleCode, localeCodes } from '../../../utils/locales'
import { DocumentationContext } from '../../../layouts/documentation'

export const createPages = async ({
  graphql,
  actions
}: Gatsby.CreatePagesArgs) => {
  const customizationsMap = await generateCustomizationMap(graphql)
  const rootFolder = await generateFolders(graphql, customizationsMap)

  createDocumentationPagesInFolder(actions, rootFolder)
}

function createDocumentationPagesInFolder(
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
  const imagesRelativeDirectory = getImagesRelativeDirectory(folder)
  const customization = folderFiles.customization

  actions.createPage<DocumentationContext>({
    path,
    component: getLayoutPath(mdxNode.frontmatter.layout),
    context: {
      breadcrumbs,
      folderPages,
      folderTitle: customization.name,
      imagesRelativeDirectory,
      localeCode,
      logoImageName: customization.logo,
      mdXNodeId: mdxNode.id
    }
  })
}
