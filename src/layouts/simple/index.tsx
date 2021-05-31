import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BaseContext } from '../../data/context'
import { MDXNode } from '../../data/mdx'
import SEO from '../../components/Seo'

interface SimpleProps {
  data: SimpleData
  pageContext: BaseContext
}

interface SimpleData {
  mdx: MDXNode
}

export const graphqlQuery = graphql`
  query simpleData($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        meta {
          title
          description
        }
      }
      body
    }
  }
`

const Simple = ({ data, pageContext }: SimpleProps): JSX.Element => {
  const { frontmatter, body } = data.mdx
  const { meta } = frontmatter

  return (
    <>
      <SEO
        localeCode={pageContext.localeCode}
        title={meta?.title}
        description={meta?.description}
      />

      <section className="section faq">
        <div className="section__in section__in_padding section__in_reverse">
          <h3 className="section__title section__title_align-left">
            {frontmatter.title}
          </h3>

          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </>
  )
}

export default Simple
