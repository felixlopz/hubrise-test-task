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
      <li className="articles__item">
        <h3 className="articles__title">{frontmatter.title}</h3>
        <div className="articles__date">
          {t('misc.posted_on')}{' '}
          <span className="articles__date-value">{dateAsString}</span>{' '}
          {t('misc.by')} {frontmatter.author}
        </div>
        {showMore && (
          <>
            <div className="articles__excerpt">{frontmatter.excerpt}</div>
            <Link to={fields.slug} className="articles__read-more">
              {t('misc.read_more')}
            </Link>
          </>
        )}
        {showBody && (
          <div className="documentation">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        )}
      </li>
    </>
  )
}

export default Post
