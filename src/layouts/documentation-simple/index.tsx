import * as React from "react"
import { graphql } from "gatsby"

import MDXProvider from "@layouts/shared/components/MdxProvider"
import SEO, { Meta } from "@layouts/shared/components/Seo"
import Block from "@layouts/shared/components/Block"
import MDXCustomRenderer from "@layouts/shared/components/MdxCustomRenderer"

interface DocumentationSimpleProps {
  data: DocumentationSimpleData
}

interface DocumentationSimpleData {
  mdx: DocumentationSimpleNode
}

interface DocumentationSimpleNode {
  body: string
  frontmatter: {
    meta?: Meta
    title: string
  }
}

export const graphqlQuery = graphql`
  query simpleData($mdxNodeId: String!) {
    mdx(id: { eq: $mdxNodeId }) {
      body
      frontmatter {
        title
        meta {
          title
          description
        }
      }
    }
  }
`

const DocumentationSimple = ({ data }: DocumentationSimpleProps): JSX.Element => {
  const { frontmatter, body } = data.mdx
  const { meta } = frontmatter

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <Block backgroundColor="white" desktopHorizontalAlign="left">
        <MDXCustomRenderer title={frontmatter.title} body={body} />
      </Block>
    </MDXProvider>
  )
}

export default DocumentationSimple
