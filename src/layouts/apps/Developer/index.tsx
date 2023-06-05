import * as React from "react"

import { IDevelopers } from "../interface"

import { Container, Content, Description, Paragraph } from "./Styles"

import Title from "@layouts/shared/components/Title"

interface DevelopersProps {
  developers: IDevelopers
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <Container>
      <Content>
        <Title backgroundColor="green">{title}</Title>

        <Description>
          <Paragraph>{description.paragraph_1}</Paragraph>
          <Paragraph>
            {description.paragraph_2.chunk_1}
            <br />
            {description.paragraph_2.chunk_2}
          </Paragraph>
        </Description>
      </Content>
    </Container>
  )
}

export default Developer
