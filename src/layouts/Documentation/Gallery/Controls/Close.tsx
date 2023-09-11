import * as React from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledClose } from "./Styles"

interface CloseProps {
  onClick: () => void
}

const Close = ({ onClick }: CloseProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onClick()
  }

  return (
    <StyledClose onClick={handleClick}>
      <Icon code="close" size={iconSizes._32} />
    </StyledClose>
  )
}

export default Close
