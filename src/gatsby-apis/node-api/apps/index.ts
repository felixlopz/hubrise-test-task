import { CreatePagesArgs } from 'gatsby'

import { getLayoutPath } from '../util/layout'
import { getAppsMap, IAppsMap } from './apps_map'
import { AppsContext } from "../../../data/context"

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const appsMap: IAppsMap = await getAppsMap(graphql)

  appsMap.forEach((apps, localeCode) => {
    actions.createPage<AppsContext>({
      path: apps.path,
      component: getLayoutPath('apps'),
      context: {
        localeCode,
        apps
      }
    })

    for (let category of apps.content.categories) {
      actions.createPage<AppsContext>({
        path: category.path,
        component: getLayoutPath('apps'),
        context: {
          localeCode,
          apps,
          categoryTitle: category.title
        }
      })
    }
  })
}
