import { CreatePagesArgs } from 'gatsby'

import {
  localeCodes,
  defaultLocaleCode,
  LocaleCode
} from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../../../src/utils/urls'
import { BaseContext } from '../../../src/data/context'
import { getBaseFiles } from './graphql'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

  const baseFiles = await getBaseFiles(graphql)

  baseFiles.forEach((node) => {
    const layoutName = node.base.split('.').slice(0, -1).join('.')

    const pathItems = node.absolutePath.split('/')
    const pathSub = pathItems[pathItems.length - 2]
    const localeCode: LocaleCode =
      localeCodes.find((localeCode) => localeCode === pathSub) ||
      defaultLocaleCode
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
