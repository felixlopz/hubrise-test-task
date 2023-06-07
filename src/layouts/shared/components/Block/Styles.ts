import styled, { css } from "styled-components"

import { BackgroundColor, bgColorMap, colorMap } from "./utils"

import { breakpoints, mixin, sizes } from "@utils/styles"

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
  $beforeExpansion: boolean
  $afterExpansion: boolean
}>`
  position: relative;
  max-width: ${sizes.maxWidth};
  margin: 0 auto;
  ${({ $verticalPadding }) => paddingVertical($verticalPadding ? sizes.blockVerticalPadding : "0")};
  ${paddingHorizontal(sizes.mobilePadding)}

  color: ${({ $backgroundColor }) => colorMap[$backgroundColor]};
  background-color: ${({ $backgroundColor }) => bgColorMap[$backgroundColor]};

  text-align: center;

  @media (min-width: ${breakpoints.large}) {
    ${({ $horizontalPadding }) => paddingHorizontal($horizontalPadding ? sizes.blockHorizontalPadding : "0")};
  }

  @media (min-width: ${breakpoints.large}) {
    ${({ $beforeExpansion, $backgroundColor }) =>
      $beforeExpansion &&
      mixin.expandBefore({ width: "calc((100vw - 100%) / 2)", color: bgColorMap[$backgroundColor] })}

    ${({ $afterExpansion, $backgroundColor }) =>
      $afterExpansion && mixin.expandAfter({ width: "calc((100vw - 100%) / 2)", color: bgColorMap[$backgroundColor] })}
  }
`
