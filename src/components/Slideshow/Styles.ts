import Image from "next/image"
import styled, { css } from "styled-components"

import { breakpoints, colors, fontSizes, mixin, zIndexValues } from "@utils/styles"

const mobileBreakpoint = breakpoints.large

const slideControl = css`
  width: 3.5rem;
  height: 3.5rem;
  ${mixin.centerElement};
  border: thin solid ${colors.white};
  border-radius: 50%;
  color: ${colors.white};
  opacity: 0.5;
  ${mixin.clickable};

  &:hover,
  &:focus {
    outline: none;
    opacity: 1;
    background-color: ${colors.backgroundDark};
  }
}
`

const arrow = css`
  background-color: ${colors.backgroundDarker};
  position: fixed;
  top: 50%;
  ${slideControl};
`

export const StyledSlideshow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexValues.slideshow};

  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.7);
  font-size: ${fontSizes._18};
`

export const Topbar = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 8rem 1fr;
  place-items: center;
  background-color: ${colors.backgroundDarker};
`

export const Title = styled.div`
  justify-self: flex-start;
`

export const Count = styled.div``

export const Close = styled.button`
  justify-self: flex-end;
  ${slideControl};
`

export const Slider = styled.div`
  @media not all and (min-width: ${mobileBreakpoint}) {
    overflow: auto;
    margin: 1rem 0;
  }

  @media (min-width: ${mobileBreakpoint}) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

export const Slide = styled.div`
  @media (min-width: ${mobileBreakpoint}) {
    ${mixin.centerElement};
  }
`

export const SlideImage = styled(Image)`
  border-radius: 0.6rem;
  width: auto;
  max-height: calc(100vh - 5rem);
  user-select: none;

  @media not all and (min-width: ${mobileBreakpoint}) {
    max-width: unset;
  }
`

export const PrevArrow = styled.button`
  left: 1rem;
  ${arrow};
`

export const NextArrow = styled.button`
  right: 1rem;
  ${arrow};
`
