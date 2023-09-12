import styled from "styled-components"

import { colors, mixin } from "@utils/styles"

import { Section as OriginalSection } from "../Styles"

export const Section = styled(OriginalSection)`
  position: relative;
  background-color: #fbfbfb;
  display: grid;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fbfbfb;
  }

  &::before {
    right: 100%;
  }

  &::after {
    left: 100%;
  }
`

export const Description = styled.div``

export const List = styled.ul`
  margin-top: 0.35rem;
`

export const ListItem = styled.li`
  position: relative;
  margin-left: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.75rem;
    transform: translateY(-50%);
    left: -0.75rem;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: ${colors.textDarkest};
  }
`

export const ItemLink = styled.a`
  margin: auto 0.2rem;
  color: ${colors.primary};
  ${mixin.linkOver(colors.textDarkest)};
`
