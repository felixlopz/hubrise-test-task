import styled from "styled-components"

import OriginalLink from "@layouts/shared/components/Link"
import { breakpoints, colors, sizes } from "@utils/styles"

export const StyledThumbList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`

export const Thumb = styled.div`
  flex: 0 0 100%;
  padding: 0 ${sizes.mobilePadding};
  text-align: left;

  @media (min-width: ${breakpoints.large}) {
    flex: 0 0 calc(50% - 0.5rem);
    padding: 0 ${sizes.desktopPadding};
  }
`

export const Link = styled(OriginalLink)`
  display: flex;
  gap: 2rem;
`

export const Icon = styled.i`
  font-size: 3.25rem;
  color: ${colors.primary};
`

export const Content = styled.div``

export const Title = styled.span`
  font-size: 1.5rem;
  color: ${colors.darkGray};
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.lightGray};
  font-weight: 400;
`
