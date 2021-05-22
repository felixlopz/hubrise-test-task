'use strict'

require('./util/gatsby-inspector')

require('source-map-support').install()
require('ts-node').register()

const plugins = [
  require(`./404`),
  require(`./apps`),
  require(`./base`),
  require(`./blog-list`),
  require(`./documentation`),
  require(`./redirects`),
  require(`./yaml`)
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

const translations = require('./util/translations')
exports.onPostBuild = translations.copy
exports.onPostBootstrap = translations.copy
