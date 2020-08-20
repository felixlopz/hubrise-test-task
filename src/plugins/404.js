const locales = require('../i18n/locales')

const { getLayout } = require(`../utils/get-layout`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const page404Layout = getLayout('404')

  locales.forEach((locale) => {
    const pathPrefix = locale.default ? `` : `/${locale.code}`
    createPage({
      path: pathPrefix + '/404',
      matchPath: `${pathPrefix}/*`,
      component: page404Layout,
      context: {
        lang: locale.code
      }
    })
  })
}
