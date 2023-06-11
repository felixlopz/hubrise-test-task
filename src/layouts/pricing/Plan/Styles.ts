import styled from "styled-components"

import Link from "@layouts/shared/components/Link"
import { colors, mixin, sizes } from "@utils/styles"

export const StyledPlan = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 1.125rem;
  margin: ${sizes.blockVerticalPadding} calc((100% - 100vw) / 2);
  padding: ${sizes.blockVerticalPadding} ${sizes.mobilePadding};
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const TitleMain = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.625rem;
  margin-bottom: 0;
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
  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`
