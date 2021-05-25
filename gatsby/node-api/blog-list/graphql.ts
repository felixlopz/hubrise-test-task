import { MDXNode } from '../../../src/data/mdx'
import { CreatePagesArgs } from 'gatsby'

export interface BlogMDXNodesData {
  allMdx: {
    nodes: Array<MDXNode>
  }
}

export async function getBlogMDXNodes(
  graphql: CreatePagesArgs['graphql']
): Promise<Array<MDXNode>> {
  const { data, errors } = await graphql<BlogMDXNodesData>(`
    query {
      allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
        nodes {
          frontmatter {
            date
          }
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  return data.allMdx.nodes
}
