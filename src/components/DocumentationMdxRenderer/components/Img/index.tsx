"use client"

import * as React from "react"
import { ImgHTMLAttributes } from "react"

import { useDocumentationContext } from "@components/DocumentationWrapper/DocumentationContext"
import imageSizes from "@utils/imageSizes"

import { StyledImage } from "./styles"

const Img = ({ src, alt, width, height }: ImgHTMLAttributes<HTMLImageElement>): JSX.Element | null => {
  if (!width || !height) throw new Error(`"width" and "height" properties required for image with src="${src}"`)

  const {
    slideshow: { setCurrentImageSrc },
  } = useDocumentationContext()

  const is2x = src!.includes("-2x-")
  const displayedWidth = Number(width) / (is2x ? 2 : 1)
  const displayedHeight = Number(height) / (is2x ? 2 : 1)

  const responsiveSize = Math.min(displayedWidth, imageSizes.documentation)

  return (
    <StyledImage
      src={src!}
      alt={alt ?? ""}
      width={displayedWidth}
      height={displayedHeight}
      sizes={`${responsiveSize}px`}
      onClick={() => setCurrentImageSrc(src!)}
    />
  )
}

export default Img
