import * as React from 'react'
import GatsbyImage from 'gatsby-image'
import { ImageSharpFluid } from '../../../data/image'

interface NonStretchedImageProps {
  alt?: string
  className?: string | object
  fluid: ImageSharpFluid['fluid']
  style?: object
}

const NonStretchedImage = ({
  alt,
  className,
  fluid,
  style
}: NonStretchedImageProps): JSX.Element => {
  let props = { alt, className, fluid, style }

  if (fluid.presentationWidth) {
    props = {
      ...props,
      className: `${className || ''} image_centered`,
      style: {
        ...(style || {}),
        // Avoid stretching by setting original width as max width.
        maxWidth: fluid.presentationWidth
      }
    }
  }

  return <GatsbyImage {...props} />
}

export default NonStretchedImage
