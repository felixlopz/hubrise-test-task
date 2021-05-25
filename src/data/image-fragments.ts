// This file's exports are not used directly from the code, but they are processed by Gatsby AST parsing when it parses
// goes through all source files looking for `graphql` exports. Fragments should be kept in a file which is imported
// every time they are needed.

import { graphql } from 'gatsby'

export const ImageFragmentSharpFluid = graphql`
  fragment ImageFragmentSharpFluid on File {
    name
    base
    publicURL
    relativeDirectory
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }
`

export const ImageFragmentSharpFixed = graphql`
  fragment ImageFragmentSharpFixed on File {
    name
    base
    publicURL
    relativeDirectory
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
