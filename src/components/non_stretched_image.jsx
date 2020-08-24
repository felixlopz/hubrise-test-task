import React from 'react'
import GatsbyImage from 'gatsby-image'

export const NonStretchedImage = (props) => {
  const { fluid, style, className } = props
  let normalizedProps = { ...props }

  if (fluid && fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(style || {}),
        // Avoid stretching by setting original width as max width.
        maxWidth: fluid.presentationWidth
      },
      className: `${className || ''} image_centered`
    }
  }

  return <GatsbyImage {...normalizedProps} />
}
