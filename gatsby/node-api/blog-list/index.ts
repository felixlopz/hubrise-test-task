// @ts-nocheck
import { CreatePagesArgs } from 'gatsby'

import { localeCodes } from '../../../src/utils/locales'
import { getLayoutPath } from '../util/layout'
import { generateArchiveList } from '../../../src/utils/blog'
import { pathWithLocale } from '../../../src/utils/urls'

const BLOG_PAGE_PATH = '/blog'

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions

  const blogListLayout = getLayoutPath('blog-list')

  const { data, errors } = await graphql(`
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

  const archiveList = generateArchiveList(
    data.allMdx.nodes.map((post) => new Date(post.frontmatter.date))
  )

  localeCodes.forEach((localeCode) => {
    // Main page: /blog
    createPage({
      path: pathWithLocale(localeCode, BLOG_PAGE_PATH),
      component: blogListLayout,
      context: {
        lang: localeCode
      }
    })

    // Archive pages: /blog/2020/7
    archiveList.forEach((archive) => {
      createPage({
        path: pathWithLocale(
          localeCode,
          archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`
        ),
        component: blogListLayout,
        context: {
          lang: localeCode,
          archive
        }
      })
    })
  })
}
