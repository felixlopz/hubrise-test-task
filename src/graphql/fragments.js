import { graphql } from 'gatsby'

export const Image = graphql`
  fragment Image on File {
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
