import { SidebarArticle } from './graphql'

export function getRecentArticles(
  sidebarArticles: Array<SidebarArticle>
): Array<SidebarArticle> {
  return sidebarArticles
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .slice(0, 5)
}
