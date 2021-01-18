import React from 'react'
import { graphql } from 'gatsby'

import { Offer, Specials } from '../components/pages/pricing'
import Link from '../components/link'
import SEO from '../components/seo'

const PricingPage = ({ data, pageContext }) => {
  const { meta, content } = data.file.childYaml.parsedContent

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />
      <section className="section section_white pricing">
        <div className="section__in section__in_padding">
          <h3 className="section__title">{content.hero.title}</h3>
          <Offer {...content.offer} />
          <Specials items={content.specials} />
        </div>
      </section>
    </>
  )
}

export const pricingPageQuery = graphql`
  query getPricingPageContent($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
  }
`

export default PricingPage
