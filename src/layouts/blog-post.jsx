import React from 'react'
import { graphql, navigate } from 'gatsby'

import Sidebar from '../components/blog/sidebar'
import Post from '../components/blog/post'
import { Breadcrumbs } from '../components/documentation'
import { ArticleFeedback } from '../components/blog/feedback'
import { getLocalizedUrl } from '../components/utils/link'
import SEO from '../components/seo'

function BlogPost({ data, pageContext }) {
  const { post } = data
  const { meta } = post.frontmatter

  function handleQueryChange(newQuery) {
    let pathname = getLocalizedUrl('/blog', pageContext.lang)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs = [
    {
      id: 1,
      path: '/blog',
      label: pageContext.config.name
    },
    { id: 2, path: null, label: post.frontmatter.title }
  ]

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar onQueryChange={handleQueryChange} />
          <div className="section__content">
            <Post post={post} showBody />
          </div>
        </div>
      </div>
      <ArticleFeedback />
    </>
  )
}

export const postContentQuery = graphql`
  query getPostContent($id: String!) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        meta {
          title
          description
        }
        title
        author
        date
      }
      fields {
        slug
      }
      body
    }
  }
`

export default BlogPost
