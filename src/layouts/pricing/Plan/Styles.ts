import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin } from "@utils/styles"

export const StyledPlan = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 4.5rem calc((100% - 100vw) / 2);
  padding: 4.5rem 0.625rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TitleMain = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.625rem;
`

export const TitleSub = styled.div``

export const List = styled.ul`
  display: block;
  list-style: none;
  color: ${colors.white};
`

export const Item = styled.li`
  display: block;
`

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 1.5em;
  color: ${colors.primary};
  background-color: #fefefe;
  border: 1px solid transparent;

  ${mixin.button};
  ${mixin.buttonOver(colors.white, colors.darkGray)};
`
