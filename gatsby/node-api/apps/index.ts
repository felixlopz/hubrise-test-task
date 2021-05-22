// @ts-nocheck
import { CreatePagesArgs } from 'gatsby'

import { localeCodes, defaultLocaleCode } from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../../../src/utils/urls'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

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
    const pathSub = pathItems[pathItems.length - 2]
    const localeCode: LocaleCode =
      localeCodes.find((localeCode) => localeCode === pathSub) || defaultLocaleCode

    const { path: relativePath, content } = node.childYaml.parsedContent
    const path = pathWithLocale(localeCode, relativePath)

    createPage({
      path,
      component: getLayoutPath('apps'),
      context: {
        id: node.id,
        lang: localeCode
      }
    })

    const categories = content.categories.map(({ title }) => title)
    categories.forEach((category) => {
      const slug = category.replace(/ +/g, '-').toLowerCase()
      createPage({
        path: path + `/${slug}`,
        component: getLayoutPath('apps'),
        context: {
          id: node.id,
          lang: localeCode,
          category: category
        }
      })
    })
  })
}
