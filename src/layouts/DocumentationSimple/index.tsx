"use client"

import * as React from "react"

import Block from "@components/Block"
import DocumentationContainer from "@components/DocumentationContainer"

interface DocumentationSimpleProps {
  title?: string
  children?: React.ReactNode
}

const DocumentationSimple = ({ title, children }: DocumentationSimpleProps): JSX.Element => {
  return (
    <Block backgroundColor="white" horizontalAlign="left">
      <DocumentationContainer title={title}>{children}</DocumentationContainer>
    </Block>
  )
}

export default DocumentationSimple
