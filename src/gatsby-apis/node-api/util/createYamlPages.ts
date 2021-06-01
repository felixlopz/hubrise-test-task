import { CreatePagesArgs } from 'gatsby'

import { generateLanguagePaths, parseRelativePath } from './locale'
import { pathWithLocale } from './urls'
import { getLayoutPath } from './layout'
import { YamlContext } from '../../../utils/context'

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
    const localeCode = parseRelativePath(node.absolutePath).localeCode
    const getPath = (localeCode) =>
      pathWithLocale(localeCode, node.childYaml.parsedContent.path)

    actions.createPage<YamlContext>({
      path: getPath(localeCode),
      component: getLayoutPath(layoutName),
      context: {
        id: node.id,
        languagePaths: generateLanguagePaths(localeCode, getPath),
        localeCode
      }
    })
  })
}
