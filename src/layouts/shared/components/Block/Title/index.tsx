import * as React from "react"

import { BackgroundColor, HorizontalAlign } from "../utils"

import { StyledTitle } from "./Styles"

interface TitleProps {
  backgroundColor: BackgroundColor
  desktopHorizontalAlign: HorizontalAlign
  children: React.ReactNode
}

const Title = ({ backgroundColor, desktopHorizontalAlign, children }: TitleProps): JSX.Element => {
  return (
    <StyledTitle $backgroundColor={backgroundColor} $desktopHorizontalAlign={desktopHorizontalAlign}>
      {children}
    </StyledTitle>
  )
}

export default Title
