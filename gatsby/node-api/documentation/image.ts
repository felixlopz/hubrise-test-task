import { GraphQLFunction } from '../util/types'
import { ImageSharpFluid } from '../../../src/data/image'

export type ImageSharpMapByPath = Map<string, ImageSharpMap>

export interface ImageSharpMap {
  [name: string]: ImageSharpFluid
}

/**
 * Returns a map allowing to find a map of images by directory path relative to /content (eg "apps/deliveroo").
 * The map of images indexes the images of the directory by their filename (eg "arrow.png").
 * @param graphql
 */
export async function generateImageSharpMapByPath(
  graphql: GraphQLFunction
): Promise<ImageSharpMapByPath> {
  const { data, errors } = await graphql<ImageGQL>(`
    query generateImageSharpMapByPath {
      allFile(
        filter: {
          absolutePath: { regex: "/content/" }
          children: {
            elemMatch: {
              internal: { type: { eq: "ImageSharp" } }
            }
          }
        }
      ) {
        nodes {
          ext
          name
          relativeDirectory
          childImageSharp {
            fluid {
              aspectRatio
              base64
              presentationWidth
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  `)
  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  const result = new Map<string, ImageSharpMap>()
  for (let node of data.allFile.nodes) {
    const { ext, name, relativeDirectory, childImageSharp } = node
    const parentDirectory = relativeDirectory.replace(/\/images$/, '')

    let imageSharpMap = result.get(parentDirectory)
    if (!imageSharpMap) {
      imageSharpMap = {}
      result.set(parentDirectory, imageSharpMap)
    }
    imageSharpMap[name.concat(ext)] = childImageSharp
  }
  return result
}

interface ImageGQL {
  allFile: {
    nodes: Array<{
      ext: string
      name: string
      relativeDirectory: string
      childImageSharp: ImageSharpFluid
    }>
  }
}
