import * as React from "react"

import { BackgroundColor, Justify } from "../utils"

import { StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  justify: Justify
  children: React.ReactNode
}

const Title = ({ backgroundColor, justify, children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle $backgroundColor={backgroundColor} $justify={justify}>
      {children}
    </StyledTitle>
  )
}

export default Title
