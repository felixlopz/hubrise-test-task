import locales from '../../../src/i18n/locales'
import { CreatePagesArgs } from 'gatsby'
import { getLayout } from '../util/get-layout'

export async function createPages({ actions }: CreatePagesArgs) {
  const { createPage } = actions

  locales.forEach((locale) => {
    const pathPrefix = locale.default ? `` : `/${locale.code}`
    createPage({
      path: pathPrefix + '/404',
      matchPath: `${pathPrefix}/*`,
      component: getLayout('404'),
      context: {
        lang: locale.code
      }
    })
  })
}
