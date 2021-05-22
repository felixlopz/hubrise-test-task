import { CreatePagesArgs } from 'gatsby'

import {
  localeCodes,
  defaultLocaleCode,
  LocaleCode
} from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../../../src/utils/urls'
import { getApps } from './helpers'
import { AppsContext, AppsCreatePageGQL } from '../../../src/data/apps'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const appsList: Array<AppsCreatePageGQL> = await getApps(graphql)

  appsList.forEach((apps) => {
    const pathItems = apps.absolutePath.split('/')
    const pathSub = pathItems[pathItems.length - 2]
    const localeCode: LocaleCode =
      localeCodes.find((localeCode) => localeCode === pathSub) ||
      defaultLocaleCode

    const { path: relativePath, content } = apps.childYaml.parsedContent
    const path = pathWithLocale(localeCode, relativePath)

    let context: AppsContext = {
      id: apps.id,
      lang: localeCode
    }
    actions.createPage({
      path,
      component: getLayoutPath('apps'),
      context
    })

    for (let category of content.categories) {
      const slug = category.title.replace(/ +/g, '-').toLowerCase()
      context = {
        id: apps.id,
        lang: localeCode,
        category: category.title
      }
      actions.createPage({
        path: path + `/${slug}`,
        component: getLayoutPath('apps'),
        context
      })
    }
  })
}
