const { resolve } = require('path')

const locales = require('../i18n/locales')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  locales.forEach((locale) => {
    createPage({
      path: locale.default ? '/' : `/${locale.code}`,
      component: resolve(__dirname, '../layouts/frontpage.jsx'),
      context: {
        lang: locale.code,
        imagesPath: `**/content/images/*`,
        yamlPath: `**/content/${locale.code}/frontpage.yaml`
      }
    })
  })
}
