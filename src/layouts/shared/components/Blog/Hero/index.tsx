import * as React from "react"

import Block from "@layouts/shared/components/Block"

interface HeroProps {
  title: string
  description: string
}

const Hero = ({ title, description }: HeroProps): JSX.Element => {
  return (
    <Block backgroundColor={"green"} expandedLeft={true} title={title}>
      <p className="section__description section__description_white">{description}</p>
    </Block>
  )
}

export default Hero
