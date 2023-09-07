import { promisify } from "util"

import imageSize from "image-size"
import Image from "next/image"
import * as React from "react"

import { contentDirectory, ContentDirName, findImage } from "@utils/files"

const sizeOf = promisify(imageSize)

interface ServerImageProps extends Omit<React.ComponentProps<typeof Image>, "src" | "width" | "height"> {
  contentDirName: ContentDirName | Array<ContentDirName>
  fileName: string
}

const ServerImage = async ({ contentDirName, fileName, ...otherProps }: ServerImageProps): Promise<JSX.Element> => {
  const contentPath = await findImage(contentDirName, fileName)

  const res = await sizeOf(contentDirectory + contentPath)
  if (!res || !res.width || !res.height) throw Error(`Image invalid "${contentPath}"`)

  const imagePath = `/api/image${contentPath}`
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={imagePath} width={res.width} height={res.height} {...otherProps} />
}

export default ServerImage
