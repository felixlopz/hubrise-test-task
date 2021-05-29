import * as Gatsby from 'gatsby'

import { generateCustomizationMap } from './customization'
import { generateFolders } from './folder'
import { generateImageSharpMapByPath } from './image'
import { createDocumentationPagesInFolder } from './page'

export const createPages = async ({
  graphql,
  actions
}: Gatsby.CreatePagesArgs) => {
  const customizationsMap = await generateCustomizationMap(graphql)
  const imageSharpMapByPath = await generateImageSharpMapByPath(graphql)
  const rootFolder = await generateFolders(
    graphql,
    customizationsMap,
    imageSharpMapByPath
  )

  createDocumentationPagesInFolder(actions, rootFolder)
}
