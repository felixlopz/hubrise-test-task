import fs from "fs/promises"
import { promisify } from "util"

import imageSize from "image-size"

import { contentDirectory, ContentDirName } from "@utils/files"
const sizeOf = promisify(imageSize)

export interface ContentImage {
  src: string
  width: number
  height: number
  // blurDataURL: string;
}

/**
 * Look for an image in the `content` directory, and return its path and dimensions. Must be used from a server
 * component.
 * @param contentDirName The directory name(s) to search in. Can be a string or an array.
 * @param filename
 */

const contentImage = async (
  contentDirName: ContentDirName | Array<ContentDirName>,
  filename: string,
): Promise<ContentImage> => {
  const contentPath = await findImage(contentDirName, filename)

  const res = await sizeOf(contentDirectory + contentPath)
  if (!res || !res.width || !res.height) throw Error(`Image invalid "${contentPath}"`)

  const imagePath = `/api/image${contentPath}`
  return { src: imagePath, width: res.width, height: res.height }
}

/**
 * Returns the path to the first image found, or throws an error.
 * @param contentDirName The directory name(s) to search in. Can be a string or an array.
 * @param filename
 */
async function findImage(
  contentDirName: ContentDirName | Array<ContentDirName>,
  filename: string,
): Promise<ContentDirName> {
  let contentPath: ContentDirName | undefined
  const contentDirs = Array.isArray(contentDirName) ? contentDirName : [contentDirName]
  for (const dirName of contentDirs) {
    contentPath = `${dirName}/${filename}`
    try {
      await fs.stat(contentDirectory + contentPath)
      return contentPath
    } catch (e) {}
  }

  const paths = contentDirs.map((dirName) => contentDirectory + dirName + "/" + filename)
  throw Error(`Image not found "${paths.join('" or "')}"`)
}

export default contentImage
