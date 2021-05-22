import { CreatePagesArgs } from 'gatsby'

import loadYaml from '../util/load-yaml'

const index = loadYaml(`redirects.yaml`)

export async function createPages({ actions }: CreatePagesArgs) {
  const { createRedirect } = actions

  index.forEach((redirect) => {
    createRedirect({
      isPermanent: true,
      ...redirect,
      force: true,
      redirectInBrowser: true
    })
  })
}
