import styled, { css } from "styled-components"

import {
  BackgroundColor,
  titleColorMap,
  HorizontalAlign,
  linkColorMap,
} from "@layouts/shared/components/Block/utils"
import { breakpoints } from "@utils/styles"

export const StyledTitle = styled.h3<{
  $backgroundColor: BackgroundColor
  $desktopHorizontalAlign: HorizontalAlign
}>`
  margin-bottom: 2.5rem;
  position: relative;

  color: ${({ $backgroundColor }) => titleColorMap[$backgroundColor]};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.625rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px auto;
    width: 15%;
    height: 3px;
    background-color: ${({ $backgroundColor }) => linkColorMap[$backgroundColor]};
  }

  ${({ $desktopHorizontalAlign }) => css`
    @media (min-width: ${breakpoints.large}) {
      text-align: ${$desktopHorizontalAlign};
      &:after {
        right: ${$desktopHorizontalAlign === "left" ? "auto" : "0"};
      }
    }
  `}
`
