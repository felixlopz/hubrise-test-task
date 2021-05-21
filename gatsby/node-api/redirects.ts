import loadYaml from '../../src/utils/load-yaml'
const redirects = loadYaml(`redirects.yaml`)

export async function createPages({ actions }) {
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
