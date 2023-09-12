import Image from "next/image"
import styled from "styled-components"

import { boxShadows, colors, mixin } from "@utils/styles"

export const StyledImage = styled(Image)`
  ${mixin.clickable};
  border: thin solid ${colors.borderLightest};
  box-shadow: ${boxShadows.smallOmnidirectional};
`
