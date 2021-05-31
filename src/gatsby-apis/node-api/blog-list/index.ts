import { CreatePagesArgs } from 'gatsby'

import { getLayoutPath } from '../util/layout'
import { getBlogMDXNodes } from './graphql'
import { localeCodes } from "../../../utils/locales"
import { BlogListContext } from "../../../data/context"
import { generateArchiveList } from "../../../utils/blog"
import { pathWithLocale } from "../util/urls"

const BLOG_PAGE_PATH = '/blog'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const blogMDXNodes = await getBlogMDXNodes(graphql)

  const blogListLayout = getLayoutPath('blog-list')

  const archiveList = generateArchiveList(
    blogMDXNodes.map((post) => new Date(post.frontmatter.date!))
  )

  localeCodes.forEach((localeCode) => {
    // Main page: /blog
    actions.createPage<BlogListContext>({
      path: pathWithLocale(localeCode, BLOG_PAGE_PATH),
      component: blogListLayout,
      context: {
        localeCode
      }
    })

    // Archive pages: /blog/2020/7
    archiveList.forEach((archive) => {
      actions.createPage<BlogListContext>({
        path: pathWithLocale(
          localeCode,
          archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`
        ),
        component: blogListLayout,
        context: {
          localeCode,
          archive
        }
      })
    })
  })
}
