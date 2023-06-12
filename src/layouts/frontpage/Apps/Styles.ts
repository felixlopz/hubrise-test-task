import styled from "styled-components"

import { breakpoints, fontSizes, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Item = styled.li`
  ${mixin.dotSeparatedList("0.5rem")};
  font-size: ${fontSizes._18};
`

export const ImageDefault = styled.div`
  max-width: 100%;
  z-index: 0;
  filter: drop-shadow(5px 5px 10px #eee);
`

export const ImageOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s linear;
`

export const ImageLink = styled(Link)`
  display: block;
  position: relative;

  @media (min-width: ${breakpoints.large}) {
    grid-row: 1;
    grid-column: 1;
    margin: 3rem;
  }

  :hover {
    ${ImageOver} {
      opacity: 1;
    }
  }
`
