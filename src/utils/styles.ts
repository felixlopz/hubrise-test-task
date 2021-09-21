import { css, FlattenSimpleInterpolation } from "styled-components"

export const colors = {
  primary: "#6db24f",

  darkGray: "#333333",
  gray: "#555555",
  lightGray: "#777777",
  silverGray: "#cccccc",
  white: "#ffffff",
}

export const sizes = {
  headerHeight: "5rem",

  rowPadding: "7.5rem",
  blockPadding: "4.688rem",
}

export const zIndexValues = {
  header: 10,
  mobileBarBackdrop: 20,
  mobileBarMenu: 30,
  slideshow: 100,
  modal: 200,
}

export const breakpoints = {
  medium: "40rem",
  large: "64rem",
  xLarge: "75rem",
  xxLarge: "90rem",
}

export const mixin = {
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  container: css`
    max-width: 96%;
    width: 1200px;
    margin: 0 auto;
  `,
  dotSeparatedList: (gap: string): FlattenSimpleInterpolation => css`
    display: inline;
  
    &:not(:last-child) {
        margin-right: ${gap};
    
      &:after {
          content: "●";
          display: inline;
          margin-left: ${gap};
          bottom: 0.15em;
          font-size: 0.75rem;
          color: ${colors.silverGray};
        }
      }
    }
  `,
}
