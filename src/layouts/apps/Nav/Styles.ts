import styled, { css } from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.mobileBarMenu};
  padding: 0.5rem 0;

  ${(props) =>
    props.$isSticky &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `}
`

export const List = styled.ul`
  ${mixin.container};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Item = styled.li<{ $isSticky: boolean }>`
  ${({ $isSticky }) => mixin.dotSeparatedList("0.5rem", $isSticky ? colors.white : undefined)};
  line-height: 2rem;
`

export const StyledLink = styled(Link)<{ $isSticky: boolean; $isActive: boolean }>`
  :hover {
    text-decoration: underline;
  }

  ${(props) =>
    props.$isActive &&
    css`
      text-decoration: underline;
    `}

  ${({ $isSticky, $isActive }) =>
    $isSticky
      ? css`
          color: ${colors.white};
        `
      : css`
          color: ${$isActive ? colors.primary : colors.textDark};

          :hover {
            color: ${colors.primary};
          }
        `}
`
