import React from 'react'
import { useTranslation } from 'react-i18next'

import Link from '../link'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function Post({ post, showMore, showBody }) {
  const { t } = useTranslation()
  const { frontmatter, fields, body } = post
  const dateAsString = new Date(frontmatter.date).toLocaleDateString()

  return (
    <>
      <div className="blog-post">
        <h3 className="blog-post__title">{frontmatter.title}</h3>
        <div className="blog-post__date">
          {t('misc.posted_on')}{' '}
          <span className="blog-post__date-value">{dateAsString}</span>{' '}
          {t('misc.by')} {frontmatter.author}
        </div>
        {showMore && (
          <>
            <div className="blog-post__excerpt">{frontmatter.excerpt}</div>
            <Link to={fields.slug} className="blog-post__read-more">
              {t('misc.read_more')}
            </Link>
          </>
        )}
        {showBody && (
          <div className="documentation">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        )}
      </div>
    </>
  )
}

export default Post
