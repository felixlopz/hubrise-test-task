import * as React from "react"

import { StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor?: "white" | "green"
  justify?: "left" | "center"
  children: React.ReactNode
}

const Title = ({ backgroundColor = "white", justify = "center", children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle $backgroundColor={backgroundColor} $justify={justify}>
      {children}
    </StyledTitle>
  )
}

export default Title
