// @ts-nocheck
import { CreatePagesArgs } from 'gatsby'

import { localeCodes, defaultLocaleCode } from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../../../src/utils/urls'
import { BaseContext } from '../../../src/data/base'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query {
      allFile(
        filter: {
          base: { in: ["apps.yaml", "frontpage.yaml", "pricing.yaml"] }
        }
      ) {
        nodes {
          absolutePath
          base
          id
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)
  if (errors) throw errors

  data.allFile.nodes.forEach((node) => {
    const page = node.base.split('.').slice(0, -1).join('.')

    const pathItems = node.absolutePath.split('/')
    const pathSub = pathItems[pathItems.length - 2]
    const localeCode: LocaleCode =
      localeCodes.find((localeCode) => localeCode === pathSub) ||
      defaultLocaleCode
    const path = pathWithLocale(localeCode, node.childYaml.parsedContent.path)

    let context: BaseContext = {
      id: node.id,
      lang: localeCode
    }
    createPage({
      path,
      component: getLayoutPath(page),
      context
    })
  })
}
