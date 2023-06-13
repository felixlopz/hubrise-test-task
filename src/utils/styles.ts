import { css, FlattenSimpleInterpolation } from "styled-components"

export const sizes = {
  maxWidth: "75rem",
  headerHeight: "5rem",

  blockVerticalPadding: "4.688rem",
  blockHorizontalPadding: "7.5rem",

  // Horizontal padding for mobile devices
  mobilePadding: "0.625rem",
  // Horizontal padding for desktop devices
  desktopPadding: "0.9375rem",

  borderRadius: "3px",
}

export const fontSizes = {
  _14: ".875rem",
  _16: "1rem",
  _18: "1.125rem",
  _24: "1.5rem",
  _32: "2rem",
  _42: "2.625rem",
}

export const lineHeights = {
  text: "1.6",
  textCompact: "1.3",
  title: "1.25",
}

export const breakpoints = {
  medium: "40rem",
  large: "64rem",
  xLarge: "75rem",
}

export const colors = {
  primary: "#6db24f",
  danger: "#e13c3c",
  warning: "#fcfaed",
  white: "#fff",

  textDarkest: "#333",
  textDark: "#555",
  textMedium: "#777",
  textLight: "#999",
  textLighter: "#ccc",

  backgroundLight: "#efefef",
  backgroundWhite: "#fff",
}

export const boxShadows = {
  small: `0 3px 3px rgba(0, 0, 0, 0.05)`,
  medium: `0 5px 10px rgba(0, 0, 0, 0.1)`,
  large: `5px 10px 15px rgba(0, 0, 0, 0.15)`,
}

export const mixin = {
  button: css`
    padding: 0.4rem 1.5rem;
    text-transform: uppercase;
    font-size: ${fontSizes._16};
    font-weight: 500;
    border-radius: ${sizes.borderRadius};
  `,
  buttonOver: (color: string, backgroundColor: string): FlattenSimpleInterpolation => css`
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      color: ${color};
      background-color: ${backgroundColor};
    }
  `,
  centerElement: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  container: css`
    max-width: 96%;
    width: ${sizes.maxWidth};
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
          color: ${colors.textLighter};
        }
      }
    }
  `,
  expandBefore: ({ width, color }: { width: string; color: string }): FlattenSimpleInterpolation => css`
    :before {
      content: "";
      background-color: ${color};
      position: absolute;
      right: 100%;
      width: ${width};
      height: 100%;
      top: 0;
    }
  `,
  expandAfter: ({ width, color }: { width: string; color: string }): FlattenSimpleInterpolation => css`
    :after {
      content: "";
      background-color: ${color};
      position: absolute;
      left: 100%;
      width: ${width};
      height: 100%;
      top: 0;
    }
  `,
  linkOver: (color: string): FlattenSimpleInterpolation => css`
    transition: color 0.2s ease;
    :hover {
      color: ${color};
    }
  `,
}

export const zIndexValues = {
  header: 10,
  mobileBarBackdrop: 20,
  mobileBarMenu: 30,
  slideshow: 100,
  modalOverlay: 150,
  modal: 200,
}
