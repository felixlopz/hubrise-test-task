import { CreatePagesArgs } from 'gatsby'

export interface BaseFilesData {
  allFile: {
    nodes: Array<{
      absolutePath
      base
      id
      childYaml: {
        parsedContent: any // TODO: move the whole type declaration into src/
      }
    }>
  }
}

export async function getBaseFiles(
  graphql: CreatePagesArgs['graphql']
): Promise<Array<BaseFilesData['allFile']['nodes'][number]>> {
  const { data, errors } = await graphql<BaseFilesData>(`
    query {
      allFile(filter: { base: { in: ["frontpage.yaml", "pricing.yaml"] } }) {
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
  if (!data) throw 'GraphQL returned no data'

  return data.allFile.nodes
}
