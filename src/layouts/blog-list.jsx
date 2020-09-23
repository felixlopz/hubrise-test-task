import React, { useEffect, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Hero from '../components/blog/hero'
import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'
import { getArchiveTitle } from '../components/utils/blog'
import { Breadcrumbs } from '../components/documentation'
import { getLocalizedUrl } from '../components/utils/link'
import SEO from '../components/seo'

function BlogList({ data, pageContext }) {
  const { t } = useTranslation()
  const { archive } = pageContext

  let nodeList = data.allMdx.nodes
    .filter((node) => node.fields.contentLang === pageContext.lang)
    .sort((a, b) => b.frontmatter.date - a.frontmatter.date)

  /** Display only articles from selected archive */
  if (archive) {
    nodeList = nodeList.filter((post) => {
      let postDate = new Date(post.frontmatter.date)
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
      setSearchQuery(searchParams.get('q'))
    }
  }, [])

  const filteredNodeList = nodeList.filter((node) =>
    node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  function handleQueryChange(newQuery) {
    setSearchQuery(newQuery)
    let pathname = getLocalizedUrl('/blog', pageContext.lang)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs = archive
    ? [
        {
          id: 1,
          path: '/blog',
          label: 'Blog'
        },
        {
          id: 2,
          path: null,
          label: `${t('misc.archive')} - ${getArchiveTitle(archive, t)}`
        }
      ]
    : []

  return (
    <>
      <SEO lang={pageContext.lang} title="HubRise Blog" description="" />
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
            nodeList={nodeList}
            searchQuery={searchQuery}
            onQueryChange={handleQueryChange}
          />
          <div className="section__content">
            <ul className="articles">
              {filteredNodeList.map((node) => (
                <Post key={node.id} post={node} showMore />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export const blogPageQuery = graphql`
  query getPostList {
    allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
      nodes {
        id
        frontmatter {
          title
          excerpt
          author
          date
        }
        fields {
          slug
          contentLang
        }
      }
    }
  }
`

export default BlogList
