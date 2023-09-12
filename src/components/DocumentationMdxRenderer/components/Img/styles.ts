import Image from "next/image"
import styled from "styled-components"

import { mixin } from "@utils/styles"

export const StyledImage = styled(Image)`
  ${mixin.clickable};
`
