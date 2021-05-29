import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { MDXBlogNode } from '../../../data/mdx'
import { getMdxBlogNodeDate } from '../../../data/blog'
import Link from '../../link'

interface PostProps {
  mdxNode: MDXBlogNode
  name: string
  showMore?: boolean
  showBody?: boolean
}

const Post = ({
  mdxNode,
  name,
  showMore = false,
  showBody = false
}: PostProps): JSX.Element => {
  const { t } = useTranslation()
  const { body, frontmatter } = mdxNode
  const dateAsString = getMdxBlogNodeDate(mdxNode).toLocaleDateString()

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
            <Link to={name} className="blog-post__read-more">
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
