import styled, { css } from "styled-components"

import { breakpoints, colors, mixin } from "@utils/styles"
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
      @media (max-width: ${breakpoints.medium}) {
        display: none;
      }
    `}
`

export const MenuItem = styled.li`
  display: block;
  margin-bottom: 0.5rem;
`

export const ItemLink = styled(Link)`
  color: ${colors.gray};
  line-height: 1.2rem;
  font-size: 0.9375rem;

  ${mixin.linkOver(colors.primary)};

  .active {
    color: ${colors.primary};
  }
`

export const MenuTitle = styled.h5`
  position: relative;
  padding-bottom: 1rem;
  color: #cccccc;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;

  &:before {
    border-bottom: 4px solid #ececec;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 65%;

    @media (max-width: ${breakpoints.medium}) {
      width: 100%;
    }
  }
`

export const ArrowIcon = styled.i`
  color: ${colors.primary};
  font-size: 1.3em;
  float: right;
  cursor: pointer;
  display: none;

  @media (max-width: ${breakpoints.medium}) {
    display: block;
  }
`
