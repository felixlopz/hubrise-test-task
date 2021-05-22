import { CreatePagesArgs } from 'gatsby'

import loadYaml from '../util/load-yaml'

interface Redirect {
  fromPath: string
  toPath: string
}

const redirects = loadYaml(`redirects.yaml`) as Array<Redirect>

export async function createPages({ actions }: CreatePagesArgs) {
  const { createRedirect } = actions

  for (let redirect of redirects) {
    createRedirect({
      isPermanent: true,
      ...redirect,
      force: true,
      redirectInBrowser: true
    })
  }
}
