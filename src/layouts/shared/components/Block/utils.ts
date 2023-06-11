import { colors } from "@utils/styles"

export type BackgroundColor = "none" | "white" | "green"

export type Justify = "left" | "center"

type ColorMap = Record<BackgroundColor, string>

export const bgColorMap: ColorMap = {
  none: "transparent",
  white: colors.white,
  green: colors.primary,
}

export const titleColorMap: ColorMap = {
  none: colors.textDarkest,
  white: colors.textDarkest,
  green: colors.white,
}

export const underlineColorMap: ColorMap = {
  none: colors.primary,
  white: colors.primary,
  green: colors.white,
}

export const colorMap: ColorMap = {
  none: colors.textMedium,
  white: colors.textMedium,
  green: colors.white,
}
