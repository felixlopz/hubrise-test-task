import Link from "next/link"
import styled, { css } from "styled-components"

import Icon from "@components/Icon"
import { breakpoints, colors, iconSizes, mixin, sizes, zIndexValues } from "@utils/styles"

export const StyledNav = styled.div<{ $isSticky: boolean }>`
  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  padding: 0.5rem 0;

  ${(props) =>
    props.$isSticky &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
      visibility: hidden;
      opacity: 0;
      pointer-events: none;

      @media (min-width: ${breakpoints.large}) {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
      }
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

export const StyledLink = styled(Link)<{ $isActive: boolean; $isSticky: boolean }>`
  color: ${({ $isActive, $isSticky }) => ($isSticky ? colors.white : $isActive ? colors.primary : colors.textDark)};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};

  &:hover {
    color: ${({ $isSticky }) => ($isSticky ? colors.white : colors.primary)};
    text-decoration: underline;
  }
`

export const MobileNav = styled.div<{ $isSticky: boolean }>`
  display: none;

  ${(props) =>
    props.$isSticky &&
    css`
      display: block;

      @media (min-width: ${breakpoints.large}) {
        display: none;
      }
    `}

  position: sticky;
  top: ${sizes.headerHeight};
  z-index: ${zIndexValues.header};
  padding: 0.5rem 0;
  background-color: ${colors.primary};
  color: ${colors.white};
`

export const MobileList = styled.ul<{ $isExpanded: boolean }>`
  display: none;

  ${(props) =>
    props.$isExpanded &&
    css`
      display: block;
    `}
`

export const MobileItem = styled.li`
  padding: 0.25rem 1rem;
`

export const Title = styled.h5`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ArrowIcon = styled(Icon).attrs({ size: iconSizes._32 })`
  color: ${colors.white};
  cursor: pointer;
`
