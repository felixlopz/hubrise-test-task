import styled from "styled-components"

import { colors } from "@utils/styles"

export const Main = styled.main`
  background-color: ${colors.backgroundLight};
  border-top: thin solid transparent; // To prevent margin collapse
`
