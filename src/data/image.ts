import './image-fragments' // TODO: remove

export interface ImageSharpFluid {
  fluid: {
    aspectRatio: number
    base64: string //TODO: do we need this heavy thing?
    presentationWidth: number
    sizes: string
    src: string
    srcSet: string
  }
}

export interface ImageSharpFixed {
  fixed: {
    base64: string //TODO: do we need this heavy thing?
    height: number
    src: string
    srcSet: string
    width: number
  }
}

export interface Image<T> {
  name: string
  base: string
  publicURL: string
  relativeDirectory: string
  childImageSharp: T
}
