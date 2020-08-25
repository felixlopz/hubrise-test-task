require('./src/utils/gatsby-inspector')

const plugins = [
  require(`./src/plugins/404.js`),
  require(`./src/plugins/base.js`),
  require(`./src/plugins/blog-list.js`),
  require(`./src/plugins/documentation.js`),
  require(`./src/plugins/redirects.js`),
  require(`./src/plugins/yaml.js`)
]

async function runApiForPlugins(api, helpers) {
  await Promise.all(
    plugins.map((plugin) => plugin[api] && plugin[api](helpers))
  )
}

exports.createSchemaCustomization = async (helpers) => {
  await runApiForPlugins(`createSchemaCustomization`, helpers)
}

exports.onCreateNode = async (helpers) => {
  await runApiForPlugins(`onCreateNode`, helpers)
}

exports.createPages = async (helpers) => {
  await runApiForPlugins(`createPages`, helpers)
}

exports.createResolvers = async (helpers) => {
  await runApiForPlugins(`createResolvers`, helpers)
}

const translations = require('./src/utils/translations')
exports.onPostBuild = translations.copy
exports.onPostBootstrap = translations.copy
