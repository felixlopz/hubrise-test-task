import * as React from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledNextArrow } from "./Styles"

interface NextArrowProps {
  currentImageNumber: number
  totalNumberOfImages: number
  onClick: () => void
}

const NextArrow = ({ currentImageNumber, totalNumberOfImages, onClick }: NextArrowProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick()
  }

  return (
    <StyledNextArrow $isVisible={currentImageNumber < totalNumberOfImages} onClick={handleClick}>
      <Icon code="chevron_right" size={iconSizes._32} />
    </StyledNextArrow>
  )
}

export default NextArrow
