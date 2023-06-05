import styled from "styled-components"

import { colors } from "@utils/styles"

export const StyledTitle = styled.h3<{
  $backgroundColor: "white" | "green"
  $justify: "left" | "center"
}>`
  margin-bottom: 2.5rem;
  position: relative;

  color: ${({ $backgroundColor }) => ($backgroundColor === "white" ? colors.darkGray : colors.white)};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.625rem;
  ${({ $justify }) => `text-align: ${$justify};`}

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: ${({ $justify }) => ($justify === "left" ? "auto" : "0")};
    top: 100%;
    margin: 10px auto;
    width: 15%;
    height: 3px;
    background-color: ${({ $backgroundColor }) => ($backgroundColor === "white" ? colors.primary : colors.white)};
  }
`
