import { CreateNodeArgs, CreatePagesArgs } from 'gatsby'

import { getLayoutPath } from '../util/layout'
import { pathWithLocale } from '../util/urls'
import { getNodesByLocale } from './graphql'
import { generateArchiveList } from '../../../components/blog/Sidebar/helpers'
import { BlogListContext } from '../../../layouts/blog-list/interface'
import { BlogPostContext } from '../../../layouts/blog-post/interface'
import { parseBlogSlug } from './helpers'

const BLOG_PAGE_PATH = '/blog'

export async function onCreateNode({ node, actions }: CreateNodeArgs) {
  if (
    node.internal.type === 'Mdx' &&
    (node.fileAbsolutePath as string).match(/\/blog\//)
  ) {
    const { localeCode, name } = parseBlogSlug(node.fileAbsolutePath as string)

    await actions.createNodeField({
      node,
      name: 'localeCode',
      value: localeCode
    })

    await actions.createNodeField({
      node,
      name: 'path',
      value: pathWithLocale(localeCode, `${BLOG_PAGE_PATH}/${name}`)
    })
  }
}

export async function createPages({ graphql, actions }: CreatePagesArgs) {
  const nodesByLocale = await getNodesByLocale(graphql)

  nodesByLocale.forEach((nodes, localeCode) => {
    if (nodes.length === 0) return

    // Main page: /blog
    actions.createPage<BlogListContext>({
      path: pathWithLocale(localeCode, BLOG_PAGE_PATH),
      component: getLayoutPath('blog-list'),
      context: {
        localeCode
      }
    })

    // Archive pages: /blog/2020/7
    const archiveList = generateArchiveList(
      nodes.map((node) => new Date(node.frontmatter.date))
    )
    archiveList.forEach((archive) => {
      actions.createPage<BlogListContext>({
        path: pathWithLocale(
          localeCode,
          archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`
        ),
        component: getLayoutPath('blog-list'),
        context: {
          localeCode,
          archive
        }
      })
    })

    // Blog pages: /blog/why-did-i-create-hubrise
    nodes.forEach((node) => {
      actions.createPage<BlogPostContext>({
        path: node.fields.path,
        component: getLayoutPath('blog-post'),
        context: { localeCode, mdxNodeId: node.id }
      })
    })
  })
}
