import * as React from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledPrevArrow } from "./Styles"

interface PrevArrowProps {
  currentImageNumber: number
  onClick: () => void
}

const PrevArrow = ({ currentImageNumber, onClick }: PrevArrowProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick()
  }

  return (
    <StyledPrevArrow $isVisible={currentImageNumber !== 1} onClick={handleClick}>
      <Icon code="chevron_left" size={iconSizes._32} />{" "}
    </StyledPrevArrow>
  )
}

export default PrevArrow
