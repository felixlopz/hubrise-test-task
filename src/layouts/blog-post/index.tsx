import * as React from 'react'
import { graphql, navigate } from 'gatsby'

import { MDXBlogNode } from '../../data/mdx'
import { parseBlogSlug } from '../../data/blog'
import SEO from '@components/Seo'
import MDXProvider from '@components/MdxProvider'
import Breadcrumbs from '@components/Breadcrumbs'
import { Breadcrumb } from '@components/Breadcrumbs/interface'
import { getLocalizedUrl } from '@components/utils/link'
import { Post, Sidebar } from '@components/blog'

export interface BlogPostProps {
  data: BlogPostData
  pageContext: any
}

interface BlogPostData {
  mdxNode: MDXBlogNode
}

export const graphqlQuery = graphql`
  query blogPostData($id: String!) {
    mdxNode: mdx(id: { eq: $id }) {
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
      body
      slug
    }
  }
`

const BlogPost = ({ data, pageContext }: BlogPostProps): JSX.Element => {
  const mdxNode = data.mdxNode
  const { meta } = mdxNode.frontmatter

  function handleQueryChange(newQuery: string): void {
    let pathname = getLocalizedUrl('/blog', pageContext.localeCode)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs: Array<Breadcrumb> = [
    {
      path: '/blog',
      label: pageContext.config.name
    },
    { label: mdxNode.frontmatter.title }
  ]

  const { name } = parseBlogSlug(mdxNode.slug)
  if (!name) return <></>

  return (
    <MDXProvider>
      <SEO
        localeCode={pageContext.localeCode}
        title={meta?.title}
        description={meta?.description}
      />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar onQueryChange={handleQueryChange} />
          <div className="section__content">
            <Post mdxNode={mdxNode} name={name} showBody />
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default BlogPost
