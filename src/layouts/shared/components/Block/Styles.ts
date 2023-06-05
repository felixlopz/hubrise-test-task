import styled, { css } from "styled-components"

import { BackgroundColor, bgColorMap, colorMap } from "./utils"

import { breakpoints, sizes } from "@utils/styles"

export const Container = styled.div`
  margin: ${sizes.blockVerticalPadding} 0;
`

const paddingVertical = (padding: string) => css`
  padding-top: ${padding};
  padding-bottom: ${padding};
`

const paddingHorizontal = (padding: string) => css`
  padding-left: ${padding};
  padding-right: ${padding};
`

export const Content = styled.div<{
  $verticalPadding: boolean
  $horizontalPadding: boolean
  $backgroundColor: BackgroundColor
  $expandedLeft: boolean
  $expandedRight: boolean
}>`
  position: relative;
  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  ${({ $verticalPadding }) => paddingVertical($verticalPadding ? sizes.blockVerticalPadding : "0")};
  ${paddingHorizontal("0.625rem")}

  color: ${({ $backgroundColor }) => colorMap[$backgroundColor]};
  background-color: ${({ $backgroundColor }) => bgColorMap[$backgroundColor]};

  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    ${({ $horizontalPadding }) => paddingHorizontal($horizontalPadding ? sizes.blockHorizontalPadding : "0")};
  }

  @media (min-width: ${breakpoints.large}) {
    ${({ $expandedLeft, $backgroundColor }) =>
      $expandedLeft &&
      css`
        :before {
          content: "";
          background-color: ${bgColorMap[$backgroundColor]};
          position: absolute;
          width: calc((100vw - 100%) / 2);
          right: 100%;
          top: 0;
          height: 100%;
        }
      `}

    ${({ $expandedRight, $backgroundColor }) =>
      $expandedRight &&
      css`
        :after {
          content: "";
          background-color: ${bgColorMap[$backgroundColor]};
          position: absolute;
          left: 100%;
          width: calc((100vw - 100%) / 2);
          top: 0;
          height: 100%;
        }
      `}
  }
`
