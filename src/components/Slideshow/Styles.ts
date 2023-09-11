import Image from "next/image"
import styled from "styled-components"

import { colors, mixin, zIndexValues } from "@utils/styles"

export const StyledSlideshow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${zIndexValues.slideshow};

  display: grid;
  grid-template-rows: max-content 1fr;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: calc(0.75rem + 0.5vw);
`

export const Topbar = styled.div`
  padding: 1rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 8rem 1fr;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Title = styled.div`
  color: ${colors.white};
  font-weight: bold;
  justify-self: flex-start;
`

export const Count = styled.div`
  color: ${colors.textMedium};
  margin-bottom: 0;
`

export const StyledSlider = styled.div`
  display: grid;
  grid-template-columns: 6% 1fr 6%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  grid-template-areas: "arrow_previous slide arrow_next";
  align-items: center;
`

export const Slide = styled.div`
  ${mixin.centerElement};
`

export const SlideImage = styled(Image)`
  border-radius: 0.6rem;
  width: auto;
  max-height: calc(100vh - 5rem);
  user-select: none;
`
