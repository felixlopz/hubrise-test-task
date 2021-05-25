import { graphql, useStaticQuery } from 'gatsby'

export interface SidebarData {
  allMdx: {
    nodes: Array<SidebarArticle>
  }
}

export interface SidebarArticle {
  fields: {
    contentLang
    slug
  }
  frontmatter: {
    date
    title
  }
  id
}

export function useSidebarData() {
  return useStaticQuery<SidebarData>(graphql`
    query getSidebarData {
      allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
        nodes {
          fields {
            contentLang
            slug
          }
          frontmatter {
            date
            title
          }
          id
        }
      }
    }
  `)
}
