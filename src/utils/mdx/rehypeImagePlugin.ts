import path, { join } from "path"
import { promisify } from "util"

import imageSize from "image-size"
import type { Processor } from "unified"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import { contentDirectory, ContentDirName } from "@utils/files"

const sizeOf = promisify(imageSize)

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

const imagePaths = (src: string, contentDirName: ContentDirName): { filePath: string; apiImagePath: string } => {
  const basePath = join(contentDirName, src)
  return {
    filePath: path.join(contentDirectory, basePath),
    apiImagePath: `/api/image${basePath}`,
  }
}

async function transformImgNode(node: ImgNode, contentDirName: ContentDirName): Promise<void> {
  const { filePath, apiImagePath } = imagePaths(node.properties.src, contentDirName)

  const res = await sizeOf(filePath)
  if (!res) throw Error(`Image not found "${filePath}"`)
  const { width, height } = res
  if (!width || !height) throw Error(`Image invalid "${node.properties.src}"`)

  node.properties.width = width
  node.properties.height = height
  node.properties.src = apiImagePath
}

/**
 * This is a Rehype plugin that transforms `<img>` elements.
 * @param contentDirName The directory name of the content directory, e.g. "/apps/deliveroo/en"
 */
export default function rehypeImagePlugin(contentDirName: ContentDirName) {
  return function plugin(this: Processor) {
    return async function transformer(tree: Node, file: VFile): Promise<Node> {
      const imgNodes: ImgNode[] = []

      visit(tree, "element", (node) => {
        if (isImgNode(node) && isLocalImage(node)) imgNodes.push(node)
      })

      // TODO: how to set height/width for remote images?

      for (const node of imgNodes) {
        await transformImgNode(node, contentDirName)
      }

      return tree
    }
  }
}
