import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Container } from "./Styles"

interface MdxCustomRendererProps {
  title?: string
  body: string
}

const MdxCustomRenderer = ({ title, body }: MdxCustomRendererProps): JSX.Element => (
  <Container>
    {title && <h1>{title}</h1>}
    <MDXRenderer>{body}</MDXRenderer>
  </Container>
)

export default MdxCustomRenderer
