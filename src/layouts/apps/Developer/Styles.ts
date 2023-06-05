import styled from "styled-components"

import { breakpoints, colors, mixin, sizes } from "@utils/styles"

export const Container = styled.div`
  margin: ${sizes.blockVerticalPadding} auto;
  color: ${colors.white};
  background-color: ${colors.primary};
  ${mixin.centerElement}
`

export const Content = styled.div`
  max-width: ${sizes.maxWidth};
  padding: ${sizes.blockVerticalPadding} 0;
  text-align: center;

  @media (max-width: ${breakpoints.large}) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`

export const Description = styled.div``

export const Paragraph = styled.div`
  line-height: 1.6;
  margin-bottom: 1rem;
`
