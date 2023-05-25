import styled from "styled-components"

import { colors } from "@utils/styles"

export const StyledTitle = styled.div`
  color: ${colors.darkGray};
  font-weight: bold;
  position: relative;
  margin-bottom: 2.5rem;
  width: 100%;
  text-align: left;
  font-size: 2.125rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: inherit;
    top: 100%;
    margin: 5px auto;
    width: 15%;
    height: 3px;
    background: ${colors.primary};
  }
`
