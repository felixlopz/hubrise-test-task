import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Offer, Specials } from '../components/pages/pricing'
import Link from '../components/link'
import SEO from '../components/seo'

const PricingPage = ({ data, pageContext }) => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />
      <section className="section section_white">
        <div className="section__in section__in_padding">
          <h3 className="section__title">{content.hero.title}</h3>
          <Offer {...content.offer} />
          <Specials items={content.specials} />
          {content.faq && (
            <div className="section__link-block">
              <Link className="section__description-link" to={content.faq.to}>
                {content.faq.text}
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export const pricingPageQuery = graphql`
  query getPricingPageContent($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        meta {
          title
          description
        }
        content {
          hero {
            title
          }
          offer {
            pricing {
              chunk_1
              chunk_2
            }
            features
            link {
              text
              to
            }
          }
          specials {
            paragraph_chunk_1
            paragraph_chunk_2
            link {
              text
              to
            }
            button
          }
          faq {
            text
            to
          }
        }
      }
    }
  }
`

export default PricingPage
