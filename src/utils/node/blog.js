const BLOG_PAGE_PATH = '/blog'
const locales = require('../../i18n/locales')

const { getLayout } = require(`../get-layout`)

const generateArchiveList = (postDateList) => {
  const sortedDates = [...postDateList].sort((a, b) => b - a)
  const archiveMap = new Map()

  sortedDates.forEach((date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const isCurrentYear = date.getFullYear() === new Date().getFullYear()
    const archiveKey = isCurrentYear ? [year, month].join('_') : year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, { year, month, isCurrentYear })
    }
  })

  return Array.from(archiveMap.values())
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogListLayout = getLayout('blog-list')

  const { data, errors } = await graphql(`
    query {
      allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            meta {
              description
              title
            }
            date
            layout
          }
        }
      }
    }
  `)
  if (errors) throw errors

  const archiveList = generateArchiveList(
    data.allMdx.nodes.map(post => new Date(post.frontmatter.date)),
  )

  Object.values(locales).forEach(locale => {
    // Main page: /blog
    createPage({
      path: (locale.default ? `` : locale.code) + BLOG_PAGE_PATH,
      component: blogListLayout,
      context: {
        config: null,
        lang: locale.code,
      },
    })

    // Archive pages: /blog/2020/7
    archiveList.forEach(archive => {
      createPage({
        path:
          (locale.default ? `` : locale.code) +
          (archive.isCurrentYear
            ? `${BLOG_PAGE_PATH}/${archive.year}/${archive.month + 1}`
            : `${BLOG_PAGE_PATH}/${archive.year}`),
        component: blogListLayout,
        context: {
          config: null,
          lang: locale.code,
          archive,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
}