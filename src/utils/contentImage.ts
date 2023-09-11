import crypto from "crypto"
import fs from "fs/promises"
import { join } from "path"
import { promisify } from "util"

import imageSize from "image-size"

import { contentDirectory, ContentDirName } from "@utils/files"
const sizeOf = promisify(imageSize)

export interface ContentImage {
  src: string
  width: number
  height: number
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
  const filePath = join(contentDirectory, contentPath)

  // Get the image dimensions.
  const res = await sizeOf(filePath)
  if (!res || !res.width || !res.height) throw Error(`Image invalid "${filePath}"`)

  // Add the hash to the last part of the image path, so that we can consider the path immutable.
  const hash = await imageHash(filePath)
  const pathWithHash = contentPath.replace(/\/([^/]+)$/, `/${hash}-$1`)
  const imagePath = `/api/image${pathWithHash}`

  return { src: imagePath, width: res.width, height: res.height }
}

export async function imageHash(filePath: string) {
  const md5 = crypto.createHash("md5")
  const file = await fs.readFile(filePath)
  md5.update(file)
  return md5.digest("hex")
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
  const contentDirs = Array.isArray(contentDirName) ? contentDirName : [contentDirName]
  for (const dirName of contentDirs) {
    const contentPath: ContentDirName = `${dirName}/${filename}`
    try {
      await fs.stat(contentDirectory + contentPath)
      return contentPath
    } catch (e) {}
  }

  const paths = contentDirs.map((dirName) => contentDirectory + dirName + "/" + filename)
  throw Error(`Image not found "${paths.join('" or "')}"`)
}

export default contentImage
