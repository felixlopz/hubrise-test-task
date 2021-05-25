import React from 'react'
import { graphql, navigate } from 'gatsby'

import { getLocalizedUrl } from '../../components/utils/link'
import { IBreadcrumb } from '../../data/documentation'
import { MDXNode } from '../../data/mdx'
import SEO from '../../components/Seo'
import MDXProvider from '../../components/MdxProvider'
import { Post, Sidebar } from '../../components/blog'
import Breadcrumbs from '../../components/documentation/breadcrumbs'

export interface BlogPostProps {
  data: BlogPostData
  pageContext: any
}

interface BlogPostData {
  mdxNode: MDXNode
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
      fields {
        slug
      }
      body
    }
  }
`

const BlogPost = ({ data, pageContext }: BlogPostProps): JSX.Element => {
  const mdxNode = data.mdxNode
  const { meta } = mdxNode.frontmatter

  function handleQueryChange(newQuery: string): void {
    let pathname = getLocalizedUrl('/blog', pageContext.lang)
    navigate(`${pathname}?q=${newQuery.trim()}`)
  }

  const breadcrumbs: Array<IBreadcrumb> = [
    {
      path: '/blog',
      label: pageContext.config.name
    },
    { label: mdxNode.frontmatter.title }
  ]

  return (
    <MDXProvider>
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
            <Post mdxNode={mdxNode} showBody />
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default BlogPost
