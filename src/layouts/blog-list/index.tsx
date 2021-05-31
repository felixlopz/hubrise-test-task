import React, { useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { getArchiveTitle } from '../../utils/blog'
import { MDXBlogNode } from '../../data/mdx'
import { BlogListContext } from '../../data/context'
import SEO from '../../components/Seo'
import MDXProvider from '../../components/MdxProvider'
import {
  getMdxBlogNodeDate,
  parseBlogSlug,
  sortMdxBlogNodesByDescendingDate
} from '../../data/blog'
import { IBreadcrumb } from '../../components/Breadcrumbs/context'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Hero, Post, Sidebar } from '../../components/blog'
import { getLocalizedUrl } from '../../components/utils/link'

interface BlogListProps {
  data: BlogListData
  pageContext: BlogListContext
}

interface BlogListData {
  allMdx: {
    nodes: Array<MDXBlogNode>
  }
}

export const graphqlQuery = graphql`
  query blogListData {
    allMdx(filter: { slug: { regex: "/^blog//" } }) {
      nodes {
        frontmatter {
          title
          excerpt
          author
          date
        }
        slug
      }
    }
  }
`

const BlogList = ({ data, pageContext }: BlogListProps): JSX.Element => {
  const { t } = useTranslation()
  const { archive } = pageContext

  const mdxNodesInLocale = data.allMdx.nodes.filter(
    (mdxNode) =>
      parseBlogSlug(mdxNode.slug).localeCode === pageContext.localeCode
  )

  /** Display only articles from selected archive, and order them by date. */
  let mdxNodes = sortMdxBlogNodesByDescendingDate(mdxNodesInLocale)
  if (archive) {
    mdxNodes = mdxNodes.filter((mdxNode) => {
      const postDate = getMdxBlogNodeDate(mdxNode)
      return archive.isCurrentYear
        ? archive.year === postDate.getFullYear() &&
            archive.month === postDate.getMonth()
        : archive.year === postDate.getFullYear()
    })
  }

  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('q')) {
      setSearchQuery(searchParams.get('q') || '')
    }
  }, [])

  const filteredMdxNodes = mdxNodes.filter((node) =>
    node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    let pathname = getLocalizedUrl('/blog', pageContext.localeCode)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  let breadcrumbs: Array<IBreadcrumb> = []
  if (archive) {
    breadcrumbs = [
      {
        path: '/blog',
        label: 'Blog'
      },
      {
        label: `${t('misc.archive')} - ${getArchiveTitle(archive, t)}`
      }
    ]
  }

  return (
    <MDXProvider>
      <SEO
        localeCode={pageContext.localeCode}
        title="HubRise Blog"
        description=""
      />

      {archive ? (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      ) : (
        <Hero
          title={'The HubRise Blog'}
          description={
            'New applications, evolutions of the API and real-world uses of HubRise'
          }
        />
      )}

      <section className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
          />
          <div className="section__content">
            {filteredMdxNodes.map((mdxNode, idx) => {
              const { name } = parseBlogSlug(mdxNode.slug)
              if (name)
                return <Post key={idx} name={name} mdxNode={mdxNode} showMore />
            })}
          </div>
        </div>
      </section>
    </MDXProvider>
  )
}

export default BlogList
