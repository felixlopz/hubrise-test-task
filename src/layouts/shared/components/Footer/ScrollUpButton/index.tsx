import * as React from "react"

import { StyledButton } from "./Styles"

import Icon from "@layouts/shared/components/Icon"
import { iconSizes } from "@utils/styles"

const ScrollUpButton: React.FC = () => (
  <StyledButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <Icon code="expand_less" size={iconSizes._32} />
  </StyledButton>
)

export default ScrollUpButton
