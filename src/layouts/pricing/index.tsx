import * as React from "react"
import { graphql } from "gatsby"

import { IPricing } from "./interface"
import Plan from "./Plan"
import Infos from "./Infos"

import SEO from "@layouts/shared/components/Seo"

interface PricingProps {
  data: PricingData
}

interface PricingData {
  file: {
    childYaml: {
      parsedContent: IPricing
    }
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

const Pricing = ({ data }: PricingProps): JSX.Element => {
  const { meta, content } = data.file.childYaml.parsedContent

  return (
    <>
      <SEO meta={meta} />

      <div className="section section_white pricing">
        <div className="section__in section__in_padding">
          <h3 className="section__title">{content.hero.title}</h3>
          <Plan plan={content.plan} />
          <Infos infos={content.infos} />
        </div>
      </div>
    </>
  )
}

export default Pricing
