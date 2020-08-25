const { loadYaml } = require(`../utils/load-yaml`)
const redirects = loadYaml(`redirects.yaml`)

exports.createPages = async ({ graphql, actions }) => {
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
