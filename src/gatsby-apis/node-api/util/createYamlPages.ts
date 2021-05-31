import { CreatePagesArgs } from 'gatsby'

import { getLocaleCodeFromFilePath } from './locale'
import { pathWithLocale } from './urls'
import { getLayoutPath } from './layout'
import { LocaleCode } from '../../../utils/locales'

export interface YamlData {
  allFile: {
    nodes: Array<{
      absolutePath
      id
      childYaml: {
        parsedContent: any
      }
    }>
  }
}

export interface YamlContext {
  id: string
  localeCode: LocaleCode
}

export async function createYamlPages(
  yamlFile: string,
  layoutName: string,
  args: CreatePagesArgs
): Promise<void> {
  const { actions, graphql } = args

  const { data, errors } = await graphql<YamlData>(`
    query {
      allFile(filter: { base: { eq: "${yamlFile}" } }) {
        nodes {
          absolutePath
          id
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  data.allFile.nodes.forEach((node) => {
    const localeCode = getLocaleCodeFromFilePath(node.absolutePath)
    const path = pathWithLocale(localeCode, node.childYaml.parsedContent.path)

    actions.createPage<YamlContext>({
      path,
      component: getLayoutPath(layoutName),
      context: {
        id: node.id,
        localeCode
      }
    })
  })
}
