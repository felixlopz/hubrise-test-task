import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Title from "../shared/components/Title"

export const StyledPost = styled.div``

export const StyledTitle = styled(Title)`
  margin-bottom: 2.5rem;
`

export const BannerImage = styled(GatsbyImage)`
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`
