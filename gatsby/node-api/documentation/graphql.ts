import { MDXNode } from '../../../src/data/mdx'
import { CreatePagesArgs } from 'gatsby'

export interface AllMDXNodesData {
  allMdx: {
    nodes: Array<MDXNode>
  }
}

export async function getAllMDXNodes(
  graphql: CreatePagesArgs['graphql']
): Promise<Array<MDXNode>> {
  const { data, errors } = await graphql<AllMDXNodesData>(`
    query {
      allMdx {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
            localeSlugMap {
              en
              fr
            }
          }
          frontmatter {
            layout
            gallery
            path_override
            meta {
              description
              title
            }
          }
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  return data.allMdx.nodes
}
