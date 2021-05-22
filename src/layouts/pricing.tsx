import React from 'react'
import { graphql } from 'gatsby'

import { Offer, Specials } from '../components/pages/pricing'
import SEO from '../components/seo'
import { PricingContext, PricingQueryGQL } from '../data/pricing'

interface PricingProps {
  data: PricingQueryGQL
  pageContext: PricingContext
}

const Pricing = ({ data, pageContext }: PricingProps): JSX.Element => {
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
          <Offer offer={content.offer} />
          <Specials specials={content.specials} />
        </div>
      </section>
    </>
  )
}

export const pricingPageQuery = graphql`
  query getPricingContent($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
  }
`

export default Pricing
