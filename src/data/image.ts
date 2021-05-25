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

export interface ImageSharpFluid {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface ImageSharpFixed {
  base64: string
  width: number
  height: number
  src: string
  srcSet: string
}

export interface Image<T> {
  name: string
  base: string
  publicURL: string
  relativeDirectory: string
  childImageSharp: {
    fluid: T & {
      presentationWidth: number
    }
  }
}
