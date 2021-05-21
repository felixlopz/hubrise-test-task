import locales from '../../src/i18n/locales'
import { getLayout } from '../../src/utils/get-layout'

export async function createPages({ graphql, actions }) {
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
    const localeCode = pathItems[pathItems.length - 2]
    const locale = locales.find(({ code }) => code === localeCode) || locales[0]

    const pathPrefix = locale.default ? '' : `/${locale.code}`
    const path = [pathPrefix, node.childYaml.parsedContent.path].join('')

    createPage({
      path,
      component: getLayout(page),
      context: {
        id: node.id,
        lang: locale.code
      }
    })
  })
}
