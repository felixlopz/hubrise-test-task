import * as React from "react"

import { IHero } from "./interface"

import { useLayoutContext } from "@layouts/shared/components/LayoutContext"
import Block from "@layouts/shared/components/Block"

const Hero = (hero: IHero): JSX.Element => {
  const { forms } = useLayoutContext()
  const { title, description } = hero

  return (
    <Block backgroundColor="white" title={title}>
      <div className="section__description">
        {description.paragraph_1}
        {description.paragraph_2 && (
          <>
            <br />
            <button className="section__description-link" onClick={forms.contact.toggle}>
              {description.paragraph_2.button}
            </button>
            {description.paragraph_2.text}
          </>
        )}
      </div>
    </Block>
  )
}

export default Hero

export type { IHero } from "./interface"
