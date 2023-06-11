import { createGlobalStyle } from "styled-components"

import { sizes } from "@utils/styles"

export const BaseStyles = createGlobalStyle`
  html {
    scroll-padding-top: ${sizes.headerHeight};
  }

  body {
    font-family: "Poppins", sans-serif;
    background: #efefef;
    overflow-x: hidden;
    min-height: 100vh;
    min-width: 320px;
    font-weight: normal;
    font-style: normal;
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
