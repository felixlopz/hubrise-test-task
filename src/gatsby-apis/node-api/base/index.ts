import { CreatePagesArgs } from 'gatsby'

import { getLayoutPath } from '../util/layout'
import { getBaseFiles } from './graphql'
import { getLocaleCodeFromFilePath } from '../util/locale'
import { BaseContext } from '../../../data/context'
import { pathWithLocale } from '../util/urls'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

  const baseFiles = await getBaseFiles(graphql)

  baseFiles.forEach((node) => {
    const layoutName = node.base.split('.').slice(0, -1).join('.')
    const localeCode = getLocaleCodeFromFilePath(node.absolutePath)
    const path = pathWithLocale(localeCode, node.childYaml.parsedContent.path)

    createPage<BaseContext>({
      path,
      component: getLayoutPath(layoutName),
      context: {
        id: node.id,
        localeCode
      }
    })
  })
}
