require('./src/utils/gatsby_inspector')

const { loadYaml } = require(`./src/utils/load-yaml`)
const redirects = loadYaml(`./redirects.yaml`)

const documentation = require(`./src/utils/node/documentation.js`)
const blog = require(`./src/utils/node/blog.js`)
const sections = [documentation, blog]

// Run the provided API on all defined sections of the site
async function runApiForSections(api, helpers) {
  await Promise.all(
    sections.map((section) => section[api] && section[api](helpers))
  )
}

exports.onCreateNode = async (helpers) => {
  await runApiForSections(`onCreateNode`, helpers)
}

exports.createPages = async (helpers) => {
  await runApiForSections(`createPages`, helpers)

  const { actions } = helpers
  const { createRedirect } = actions

  redirects.forEach((redirect) => {
    createRedirect({
      isPermanent: true,
      ...redirect,
      force: true,
      redirectInBrowser: true
    })
  })
}

const translations = require('./src/utils/translations')
exports.onPostBuild = translations.copy
exports.onPostBootstrap = translations.copy
