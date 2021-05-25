import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'

interface PrevArrowProps {
  currentImageNumber: number
  onClick?: Function
}

const PrevArrow = ({
  currentImageNumber,
  onClick
}: PrevArrowProps): JSX.Element => {
  return (
    <button
      style={{
        visibility: currentImageNumber !== 1 ? `unset` : `hidden`
      }}
      className="image-slider__arrow_previous"
      onClick={(e) => {
        e.stopPropagation()
        if (onClick) onClick()
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  )
}

export default PrevArrow
