import * as React from "react"

import { IHero } from "../interface"

import Link from "@layouts/shared/components/Link"
import { useLayoutContext } from "@layouts/shared/components/LayoutContext"
import Block from "@layouts/shared/components/Block"

interface HeroProps {
  hero: IHero
}

const Hero = ({ hero }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <Block backgroundColor="white" title={hero.title}>
      <div className="section__description">
        <p>
          {hero.description.paragraph_1_text}{" "}
          <button className="section__description-link" onClick={forms.contact.toggle}>
            {hero.description.paragraph_1_link_text}
          </button>
        </p>
        <p>
          {hero.description.paragraph_2_text}{" "}
          <Link className="section__description-link" to={hero.description.paragraph_2_link_to}>
            {hero.description.paragraph_2_link_text}
          </Link>
        </p>
      </div>
    </Block>
  )
}

export default Hero
