import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Title from "../shared/components/Title"

import Link from "@layouts/shared/components/Link"
import { breakpoints, colors, mixin } from "@utils/styles"

export const StyledPostSummary = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "title title" "image text";

  & + & {
    margin-top: 3rem;
  }
`

export const StyledTitle = styled(Title)`
  grid-area: title;
`

export const BannerImage = styled(GatsbyImage)`
  grid-area: image;
`

export const Text = styled.div`
  grid-area: text;
  padding-left: 1rem;
`

export const Excerpt = styled.div`
  color: ${colors.gray};
  line-height: 1.6;
  margin-bottom: 1rem;
`

export const ReadMore = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.3rem 1.8rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${colors.white};
  background: ${colors.gray};
  border-radius: 3px;

  ${mixin.buttonOver(colors.white, colors.primary)};

  @media (min-width: ${breakpoints.medium}) {
    width: auto;
  }
`
