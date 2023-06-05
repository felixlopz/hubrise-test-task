import * as React from "react"

interface HeroProps {
  title: string
  description: string
}

function Hero({ title, description }: HeroProps): JSX.Element {
  return (
    <div className="section">
      <div className="section__in section__in_padding section__in_green section__in_left">
        <h3 className="section__title">{title}</h3>
        <p className="section__description section__description_white">{description}</p>
      </div>
    </div>
  )
}

export default Hero
