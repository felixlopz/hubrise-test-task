import React from 'react'

import { useLayoutContext } from '../../../context/layout'
import { MDXNode } from '../../../data/mdx'

export type HeroProps = MDXNode["frontmatter"]["content"]["hero"]

const Hero = ({ title, description }: HeroProps): JSX.Element => {
  const { forms } = useLayoutContext()

  return (
    <section className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{title}</h3>
        <p className="section__description">
          {description.paragraph_1}
          <br />
          {description.paragraph_2 ? (
            <>
              <button
                className="section__description-link"
                onClick={forms.contact.toggle}
              >
                {description.paragraph_2.button}
              </button>
              {description.paragraph_2.text}
            </>
          ) : null}
        </p>
      </div>
    </section>
  )
}

export default Hero
