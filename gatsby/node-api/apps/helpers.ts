import { GraphQLFunction } from '../util/types'
import { AppsGQL } from '../../../src/data/apps'

export async function getApps(
  graphql: GraphQLFunction
): Promise<Array<AppsGQL>> {
  const result = await graphql<any>(`
    query {
      allFile(filter: { base: { eq: "apps.yaml" } }) {
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
  if (result.errors) {
    throw new Error(result.errors)
  }

  return result.data.allFile.nodes as AppsGQL[]
}
