"use client"

import * as React from "react"

import Block from "@components/Block"
import DocumentationContainer from "@components/DocumentationContainer"
import { DocumentationContextProvider } from "@components/DocumentationContext"
import DocumentationSlideshow from "@components/DocumentationSlideshow"
import { ContentImage } from "@utils/contentImage"

interface DocumentationSimpleProps {
  title: string
  contentImages: Array<ContentImage>
  children?: React.ReactNode
}

const DocumentationSimple = ({ title, contentImages, children }: DocumentationSimpleProps): JSX.Element => {
  return (
    <DocumentationContextProvider>
      <DocumentationSlideshow contentImages={contentImages} title={title} />

      <Block backgroundColor="white" horizontalAlign="left">
        <DocumentationContainer title={title}>{children}</DocumentationContainer>
      </Block>
    </DocumentationContextProvider>
  )
}

export default DocumentationSimple
