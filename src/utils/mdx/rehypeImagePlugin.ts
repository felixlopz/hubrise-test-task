import type { Processor } from "unified"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import contentImage, { ContentImage } from "@utils/contentImage"
import { ContentDirName } from "@utils/files"

/**
 * An `<img>` HAST node
 */
interface ImgNode extends Node {
  type: "element"
  tagName: "img"
  properties: {
    src: string
    height?: number
    width?: number
  }
}

function isImgNode(node: Node): node is ImgNode {
  const img = node as any // Allow any property to be checked
  return img.type === "element" && img.tagName === "img" && img.properties && typeof img.properties.src === "string"
}

function isLocalImage(node: ImgNode): boolean {
  const { src } = node.properties
  return !src.startsWith("http:") && !src.startsWith("https:") && !src.startsWith("//") && !src.startsWith("data:")
}

async function transformImgNode(
  node: ImgNode,
  contentDirName: ContentDirName,
  images: Array<ContentImage>,
): Promise<void> {
  const image = await contentImage(contentDirName, node.properties.src)
  node.properties.width = image.width
  node.properties.height = image.height
  node.properties.src = image.src

  images.push(image)
}

/**
 * This is a Rehype plugin that transforms `<img>` elements.
 * @param contentDirName The directory name of the content directory, e.g. "/apps/deliveroo/en"
 * @param contentImages An array that will be populated with the images found in the document.
 */
export default function rehypeImagePlugin(contentDirName: ContentDirName, contentImages: Array<ContentImage>) {
  return function plugin(this: Processor) {
    return async function transformer(tree: Node, _file: VFile): Promise<Node> {
      const imgNodes: ImgNode[] = []

      visit(tree, "element", (node) => {
        if (isImgNode(node) && isLocalImage(node)) imgNodes.push(node)
      })

      // TODO: how to set height/width for remote images?

      for (const node of imgNodes) {
        await transformImgNode(node, contentDirName, contentImages)
      }

      return tree
    }
  }
}
