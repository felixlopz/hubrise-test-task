import styled, { css, FlattenSimpleInterpolation } from "styled-components"

import Link from "@layouts/shared/components/Link"
import { boxShadows, breakpoints, colors, mixin, zIndexValues } from "@utils/styles"

const mobilePadding = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const StyledNavigator = styled.div`
  @media (max-width: ${breakpoints.large}) {
    border-top: 1px solid ${colors.primary};
    border-bottom: 1px solid ${colors.primary};
  }
`

export const Title = styled.h5<{ $forMobile?: boolean; $isExpanded?: boolean }>`
  display: none;
  position: relative;
  padding-top: 1rem;
  padding-left: 0;
  margin-bottom: 0;
  color: ${colors.darkGray};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: ${breakpoints.large}) {
    display: block;
    padding-left: 1rem;
  }

  ${(props) =>
    props.$forMobile &&
    css`
      display: block;
      margin-bottom: 0;
      padding: 1rem;

      @media (min-width: ${breakpoints.large}) {
        display: none;
      }
    `}

  ${(props) =>
    props.$isExpanded &&
    css`
      border-bottom: 1px solid ${colors.primary};
    `}
`

const linkColor = (color: string): FlattenSimpleInterpolation => css`
  color: ${color};
  :hover,
  :focus {
    color: ${color};
  }
`

export const TitleLink = styled(Link)`
  ${linkColor(colors.darkGray)};
`

export const List = styled.ul<{ $isExpanded?: boolean }>`
  padding: 1rem 0;

  @media (max-width: ${breakpoints.large}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: ${zIndexValues.header};
    padding: 0;

    background-color: ${colors.backgroundWhite};
    border-bottom: 1px solid ${colors.primary};
    box-shadow: ${boxShadows.medium};
  }

  ${(props) =>
    !props.$isExpanded &&
    css`
      display: none;

      @media (min-width: ${breakpoints.large}) {
        display: block;
      }
    `}
`

export const ArrowIcon = styled.i`
  color: ${colors.primary};
  font-size: 1.3em;
  float: right;
  cursor: pointer;
  display: block;

  @media (min-width: ${breakpoints.large}) {
    display: none;
  }
`

export const Item = styled.li<{ $isActive: boolean }>`
  color: ${colors.darkGray};
  font-weight: 500;
  font-size: 0.9375rem;
  width: 100%;
  display: inline-block;

  ${(props) =>
    props.$isActive &&
    css`
      color: ${colors.white};
    `}
`

export const ItemLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 0.25rem 0 0.25rem 1rem;
  ${linkColor(colors.darkGray)};
  font-weight: 500;
  font-size: 0.9375rem;

  @media (max-width: ${breakpoints.large}) {
    ${mobilePadding};
  }

  ${mixin.linkOver(colors.primary)};

  ${(props) =>
    props.$isActive &&
    css`
      ${linkColor(colors.white)};
      background: ${colors.primary};

      &:hover {
        color: ${colors.white};
      }
    `}
`

export const SubList = styled.ol`
  margin-left: 1.7rem;
  margin-top: 0.2rem;
  list-style: none;
`

export const SubItemLink = styled(Link)<{ $isActive: boolean }>`
  ${linkColor(colors.darkGray)};
  font-weight: 400;
  font-size: 0.9375rem;
  display: inline-block;
  width: 100%;

  ${mixin.linkOver(colors.primary)};

  @media (max-width: ${breakpoints.large}) {
    ${mobilePadding};
  }

  ${(props) =>
    props.$isActive &&
    css`
      ${linkColor(colors.primary)};
      font-weight: 500;
    `}
`
