require('./src/utils/gatsby-inspector')

const plugins = [
  require(`./src/plugins/blog-list.js`),
  require(`./src/plugins/documentation.js`),
  require(`./src/plugins/redirects.js`)
]

async function runApiForPlugins(api, helpers) {
  await Promise.all(
    plugins.map((plugin) => plugin[api] && plugin[api](helpers))
  )
}

exports.onCreateNode = async (helpers) => {
  await runApiForPlugins(`onCreateNode`, helpers)
}

exports.createPages = async (helpers) => {
  await runApiForPlugins(`createPages`, helpers)
}

const translations = require('./src/utils/translations')
exports.onPostBuild = translations.copy
exports.onPostBootstrap = translations.copy
