import React from 'react'

function InlineImage({ children, width, height }) {
  const convertToNumber = (value) => {
    const num = Number(value)
    return Number.isNaN(num) ? undefined : num
  }
  return (
    <div
      className="inline-image-container"
      data-width={width}
      data-height={height}
      style={{
        width: convertToNumber(width),
        height: convertToNumber(height)
      }}
    >
      {children}
    </div>
  )
}

export default InlineImage
