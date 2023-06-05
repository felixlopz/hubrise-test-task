import * as React from "react"

import { Container, Content } from "./Styles"
import Title from "./Title"
import { BackgroundColor, Justify } from "./utils"

interface BlockProps {
  children: React.ReactNode
  backgroundColor: BackgroundColor
  expandedLeft?: boolean
  expandedRight?: boolean
  justify?: Justify
  title?: string
}

const Block = ({
  children,
  backgroundColor,
  expandedLeft = false,
  expandedRight = false,
  justify = "center",
  title,
}: BlockProps): JSX.Element => {
  return (
    <Container>
      <Content
        $verticalPadding={backgroundColor !== "none"}
        $horizontalPadding={backgroundColor !== "none" && (!expandedLeft || !expandedRight)}
        $backgroundColor={backgroundColor}
        $expandedLeft={expandedLeft}
        $expandedRight={expandedRight}
      >
        {title && (
          <Title backgroundColor={backgroundColor} justify={justify}>
            {title}
          </Title>
        )}

        {children}
      </Content>
    </Container>
  )
}

export default Block
