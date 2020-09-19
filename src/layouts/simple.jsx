import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'

const SimplePage = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { meta } = frontmatter

  return (
    <>
      <SEO
        lang={pageContext.lang}
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

export const simplePageQuery = graphql`
  query getSimplePageContent($id: String!) {
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

SimplePage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      }),
      body: PropTypes.string.isRequired
    })
  })
}

export default SimplePage
