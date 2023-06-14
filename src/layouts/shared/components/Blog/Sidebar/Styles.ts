import styled, { css } from "styled-components"

import { breakpoints, colors, lineHeights, mixin } from "@utils/styles"
import Link from "@layouts/shared/components/Link"

export const Menu = styled.div`
  margin-bottom: 2rem;
`

export const MenuList = styled.ul<{ $isSelected: boolean }>`
  display: block;
  margin-top: 1rem;

  ${(props) =>
    props.$isSelected === false &&
    css`
      @media not (min-width: ${breakpoints.blogStickyMenu}) {
        display: none;
      }
    `}
`

export const MenuItem = styled.li`
  display: block;
  margin-bottom: 0.5rem;
`

export const ItemLink = styled(Link)`
  color: ${colors.textDark};
  line-height: ${lineHeights.textCompact};

  ${mixin.linkOver(colors.primary)};

  .active {
    color: ${colors.primary};
  }
`

export const MenuTitle = styled.h5`
  position: relative;
  padding-bottom: 1rem;
  color: ${colors.textLight};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    cursor: default;
  }

  &:before {
    border-bottom: 4px solid #ececec;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    @media (min-width: ${breakpoints.blogStickyMenu}) {
      width: 65%;
    }
  }
`

export const ArrowIcon = styled.i`
  display: block;
  color: ${colors.primary};
  font-size: 1.3em;
  float: right;
  cursor: pointer;

  @media (min-width: ${breakpoints.blogStickyMenu}) {
    display: none;
  }
`
