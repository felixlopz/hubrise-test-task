import locales from '../../src/i18n/locales'
import { getLayout } from '../../src/utils/get-layout'

export async function createPages({ graphql, actions }) {
  const { createPage } = actions
  const appsLayout = getLayout('apps')

  const { data, errors } = await graphql(`
    query {
      allFile(filter: { base: { eq: "apps.yaml" } }) {
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
    const pathItems = node.absolutePath.split('/')
    const localeCode = pathItems[pathItems.length - 2]
    const locale = locales.find(({ code }) => code === localeCode) || locales[0]

    const pathPrefix = locale.default ? '' : `/${locale.code}`
    const { path, content } = node.childYaml.parsedContent
    const pathWithLocale = [pathPrefix, path].join('')

    createPage({
      path: pathWithLocale,
      component: appsLayout,
      context: {
        id: node.id,
        lang: locale.code
      }
    })

    const categories = content.categories.map(({ title }) => title)
    categories.forEach((category) => {
      const slug = category.replace(/ +/g, '-').toLowerCase()
      createPage({
        path: pathWithLocale + `/${slug}`,
        component: appsLayout,
        context: {
          id: node.id,
          lang: locale.code,
          category: category
        }
      })
    })
  })
}
