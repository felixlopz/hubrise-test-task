import locales from '../../src/i18n/locales'
import { getLayout } from '../../src/utils/get-layout'

export async function createPages({ actions }) {
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
