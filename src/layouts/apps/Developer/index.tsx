import * as React from "react"

import { IDevelopers } from "../interface"

import { Description, Paragraph } from "./Styles"

import Block from "@layouts/shared/components/Block"

interface DevelopersProps {
  developers: IDevelopers
}

const Developer = ({ developers }: DevelopersProps): JSX.Element => {
  const { title, description } = developers

  return (
    <Block backgroundColor="green" beforeExpansion={true} afterExpansion={true} title={title}>
      <Description>
        <Paragraph>{description.paragraph_1}</Paragraph>
        <Paragraph>
          {description.paragraph_2.chunk_1}
          <br />
          {description.paragraph_2.chunk_2}
        </Paragraph>
      </Description>
    </Block>
  )
}

export default Developer
