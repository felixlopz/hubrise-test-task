import { CreatePagesArgs } from 'gatsby'
import { MDXBlogNode } from "../../../data/mdx"

export interface BlogMDXNodesData {
  allMdx: {
    nodes: Array<MDXBlogNode>
  }
}

export async function getBlogMDXNodes(
  graphql: CreatePagesArgs['graphql']
): Promise<Array<MDXBlogNode>> {
  const { data, errors } = await graphql<BlogMDXNodesData>(`
    query {
      allMdx(filter: { slug: { regex: "/^blog//" } }) {
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
