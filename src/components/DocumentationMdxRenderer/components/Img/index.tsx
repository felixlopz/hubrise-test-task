"use client"

import Image from "next/image"
import * as React from "react"
import { ImgHTMLAttributes } from "react"

import { useDocumentationContext } from "@components/DocumentationContext"
import imageSizes from "@utils/imageSizes"

const Img = ({ src, alt, width, height }: ImgHTMLAttributes<HTMLImageElement>): JSX.Element | null => {
  if (!width || !height) throw new Error(`"width" and "height" properties required for image with src="${src}"`)

  const {
    slideshow: { setCurrentImageSrc },
  } = useDocumentationContext()

  return (
    <Image
      src={src!}
      alt={alt ?? ""}
      width={Number(width)}
      height={Number(height)}
      sizes={imageSizes.documentation}
      onClick={() => setCurrentImageSrc(src!)}
    />
  )
}

export default Img
