import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import classNames from 'classnames'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'

import {
  generateArchiveList,
  getArchiveLink,
  getArchiveTitle
} from '../../utils/blog'
import Link from '../link'

function getRecentPosts (articleEdges) {
  return articleEdges
    .map((edge) => {
      const { frontmatter, id, fields } = edge.node
      return {
        id,
        title: frontmatter.title,
        date: new Date(frontmatter.date),
        url: fields.slug
      }
    })
    .sort((a, b) => b.date - a.date)
    .slice(0, 5)
}

function Sidebar ({ searchQuery, onQueryChange, hideSearchInput }) {
  const { t, i18n } = useTranslation()
  const {
    allMdx: { edges: articleEdges }
  } = useStaticQuery(blogSidebarQuery)

  const filteredArticleEdges = articleEdges.filter(
    (edge) => edge.node.fields.contentLang === i18n.language
  )

  const isDesktop = useMedia('(min-width: 1024px)')
  const [query, setQuery] = useState(searchQuery || '')

  useEffect(() => {
    const updatedSearchQuery = searchQuery || ''
    if (query !== updatedSearchQuery) {
      setQuery(updatedSearchQuery)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  const [isRecentPostsExpanded, setRecentPostsExpanded] = useState(true)
  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    setRecentPostsExpanded(isDesktop)
    setArchiveExpanded(isDesktop)
  }, [isDesktop])

  function handleSearchSubmit (event) {
    event.preventDefault()

    if (query.trim() !== searchQuery) {
      onQueryChange(query.trim())
    }
  }

  const recentPosts = getRecentPosts(filteredArticleEdges)

  const archiveList = generateArchiveList(
    filteredArticleEdges.map((edge) => new Date(edge.node.frontmatter.date))
  )

  return (
    <aside className="section__sidebar blog-sidebar">
      {hideSearchInput ? null : (
        <form className="blog-sidebar__search" onSubmit={handleSearchSubmit}>
          <input
            className="blog-sidebar__search-input"
            type="text"
            placeholder={t('misc.search')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <i
            className="blog-sidebar__search-button fa fa-search"
            onClick={handleSearchSubmit}
          />
        </form>
      )}

      <div
        className={classNames(
          'blog-sidebar__menu',
          !isRecentPostsExpanded && 'blog-sidebar__menu_hidden'
        )}
      >
        <h5
          className="blog-sidebar__menu-title"
          onClick={() => !isDesktop && setRecentPostsExpanded((prev) => !prev)}
        >
          {t('misc.recent_posts')}
          <i
            className={classNames(
              'blog-sidebar__menu-arrow',
              isRecentPostsExpanded ? 'fa fa-angle-up' : 'fa fa-angle-down'
            )}
          />
        </h5>
        <ul className="blog-sidebar__menu-list">
          {recentPosts.map((post) => (
            <li className="blog-sidebar__menu-item" key={post.id}>
              <Link to={post.url} activeClassName="active">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={classNames(
          'blog-sidebar__menu',
          !isArchiveExpanded && 'blog-sidebar__menu_hidden'
        )}
      >
        <h5
          className="blog-sidebar__menu-title"
          onClick={() => !isDesktop && setArchiveExpanded((prev) => !prev)}
        >
          {t('misc.archives')}
          <i
            className={classNames(
              'blog-sidebar__menu-arrow',
              isArchiveExpanded ? 'fa fa-angle-up' : 'fa fa-angle-down'
            )}
          />
        </h5>
        <ul className="blog-sidebar__menu-list">
          {archiveList.map((archiveInfo) => (
            <li className="blog-sidebar__menu-item" key={[archiveInfo.year, archiveInfo.month].join('_')}>
              <Link to={getArchiveLink(archiveInfo)} activeClassName="active">
                {getArchiveTitle(archiveInfo, t)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

const blogSidebarQuery = graphql`
  query getSidebarData {
    allMdx(filter: { fields: { slug: { glob: "/blog/*" } } }) {
      edges {
        node {
          id
          fields {
            slug
            contentLang
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default Sidebar
