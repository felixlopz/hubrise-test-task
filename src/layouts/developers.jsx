import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Thumb } from '../components/pages/developers'
import { generateKey } from '../components/utils'
import SEO from '../components/seo'

const DevelopersPage = ({ data, pageContext }) => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />
      <div className="index">
        <Hero {...content.hero} />
        <section className="section">
          <div
            className={`
            section__in
            section__in_padding
            section__in_reverse
          `}
          >
            <ul className="developers-thumbs">
              {content.thumbs.map((props, idx) => (
                <Thumb key={generateKey(props.title, idx)} {...props} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export const developersPageQuery = graphql`
  query getDevelopersPageContent($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        meta {
          title
          description
        }
        content {
          hero {
            title
            description {
              paragraph_1
              paragraph_2 {
                button
                text
              }
            }
          }
          thumbs {
            title
            description
            to
            icon
          }
        }
      }
    }
  }
`

export default DevelopersPage
