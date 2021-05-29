import { CreatePagesArgs } from 'gatsby'

import { getLayoutPath } from '../util/layout'
import { localeCodes } from '../../../src/utils/locales'
import { pathWithLocale } from '../../../src/utils/urls'
import { RootContext } from '../../../src/data/context'

export async function createPages({ actions }: CreatePagesArgs) {
  const { createPage } = actions

  localeCodes.forEach((localeCode) => {
    createPage<RootContext>({
      path: pathWithLocale(localeCode, '/404'),
      matchPath: pathWithLocale(localeCode, '/*'),
      component: getLayoutPath('404'),
      context: {
        localeCode
      }
    })
  })
}
