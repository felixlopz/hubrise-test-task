import './image-fragments'

export interface ImageSharpFluid {
  fluid: {
    base64: string
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
    presentationWidth: number
  }
}

export interface ImageSharpFixed {
  fixed: {
    base64: string
    width: number
    height: number
    src: string
    srcSet: string
  }
}

export interface Image<T> {
  name: string
  base: string
  publicURL: string
  relativeDirectory: string
  childImageSharp: T
}
