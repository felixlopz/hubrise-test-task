import * as React from 'react'
import { graphql } from 'gatsby'

import { BaseContext } from '../../data/context'
import { Image, ImageSharpFluid } from '../../data/image'
import { IPricing } from '../../data/pricing'
import SEO from '../../components/Seo'
import Offer from "./components/Offer"
import Specials from "./components/Specials"

interface PricingProps {
  data: PricingData
  pageContext: BaseContext
}

interface PricingData {
  file: {
    childYaml: {
      parsedContent: IPricing
    }
  }
  logos: {
    nodes: Array<Image<ImageSharpFluid>>
  }
}

export const graphqlQuery = graphql`
  query pricingData($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
  }
`

const Pricing = ({ data, pageContext }: PricingProps): JSX.Element => {
  const { meta, content } = data.file.childYaml.parsedContent

  return (
    <>
      <SEO
        localeCode={pageContext.localeCode}
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

export default Pricing
