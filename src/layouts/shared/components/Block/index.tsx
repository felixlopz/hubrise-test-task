import * as React from "react"

import { Container, Content } from "./Styles"
import Title from "./Title"
import { BackgroundColor, Justify } from "./utils"

interface BlockProps {
  children: React.ReactNode
  backgroundColor: BackgroundColor
  beforeExpansion?: boolean
  afterExpansion?: boolean
  justify?: Justify
  title?: string
}

const Block = ({
  children,
  backgroundColor,
  beforeExpansion = false,
  afterExpansion = false,
  justify = "center",
  title,
}: BlockProps): JSX.Element => {
  return (
    <Container>
      <Content
        $verticalPadding={backgroundColor !== "none"}
        $horizontalPadding={backgroundColor !== "none" && (!beforeExpansion || !afterExpansion)}
        $backgroundColor={backgroundColor}
        $beforeExpansion={beforeExpansion}
        $afterExpansion={afterExpansion}
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
