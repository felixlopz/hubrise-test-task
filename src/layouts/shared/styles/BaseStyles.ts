import { createGlobalStyle } from "styled-components"

import { colors, sizes } from "@utils/styles"

export const BaseStyles = createGlobalStyle`
  html {
    scroll-padding-top: ${sizes.headerHeight};
  }

  body {
    overflow-x: hidden;
    min-height: 100vh;
    min-width: 320px;

    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: ${colors.textMedium};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: "Poppins", sans-serif;
  }
`
