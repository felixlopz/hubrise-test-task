import { CreatePagesArgs } from 'gatsby'

import { localeCodes } from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { generateArchiveList } from '../../../src/utils/blog'
import { pathWithLocale } from '../../../src/utils/urls'
import { BlogListContext } from '../../../src/data/context'
import { getBlogMDXNodes } from './graphql'

const BLOG_PAGE_PATH = '/blog'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

  const blogListLayout = getLayoutPath('blog-list')

  const blogMDXNodes = await getBlogMDXNodes(graphql)

  const archiveList = generateArchiveList(
    blogMDXNodes.map((post) => new Date(post.frontmatter.date!))
  )

  localeCodes.forEach((localeCode) => {
    // Main page: /blog
    createPage<BlogListContext>({
      path: pathWithLocale(localeCode, BLOG_PAGE_PATH),
      component: blogListLayout,
      context: {
        id: 'blog???', // TODO
        lang: localeCode
      }
    })

    // Archive pages: /blog/2020/7
    archiveList.forEach((archive) => {
      createPage<BlogListContext>({
        path: pathWithLocale(
          localeCode,
          archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`
        ),
        component: blogListLayout,
        context: {
          id: `blog-archive???`, // TODO
          lang: localeCode,
          archive
        }
      })
    })
  })
}
