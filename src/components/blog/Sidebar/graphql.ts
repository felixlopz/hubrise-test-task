import { graphql, useStaticQuery } from 'gatsby'
import { LocaleCode } from '../../../utils/locales'
import { parseBlogSlug } from '../../../data/blog'

export interface SidebarArticle {
  frontmatter: {
    date: string
    title: string
  }
  localeCode: LocaleCode
  name: string
}

export function useSidebarData(): Array<SidebarArticle> {
  const data = useStaticQuery<SidebarData>(graphql`
    query getSidebarData {
      allMdx(filter: { slug: { regex: "/^blog//" } }) {
        nodes {
          frontmatter {
            date
            title
          }
          slug
        }
      }
    }
  `)

  const result: Array<SidebarArticle> = []
  for (let node of data.allMdx.nodes) {
    const { localeCode, name } = parseBlogSlug(node.slug)
    if (!localeCode || !name) {
      console.log(
        `The blog file ${node.slug} appears to not live in a blog/{localeCode} folder. Skipping.`
      )
      continue
    }
    result.push({
      frontmatter: node.frontmatter,
      localeCode,
      name
    })
  }
  return result
}

interface SidebarData {
  allMdx: {
    nodes: Array<{
      frontmatter: {
        date
        title
      }
      slug
    }>
  }
}
