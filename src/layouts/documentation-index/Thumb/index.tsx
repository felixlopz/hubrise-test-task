import * as React from "react"

import { Icon, Link, Title, StyledThumb, Description } from "./Styles"

export interface ThumbProps {
  description: string
  icon: string
  title: string
  to: string
}

const Thumb = ({ description, icon, title, to }: ThumbProps): JSX.Element => {
  return (
    <StyledThumb>
      <Link to={to} addLocalePrefix={false}>
        <Icon className={`fa ${icon}`} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </StyledThumb>
  )
}

export default Thumb
