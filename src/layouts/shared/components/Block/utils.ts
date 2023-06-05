import { colors } from "@utils/styles"

export type BackgroundColor = "none" | "white" | "green"

export type Justify = "left" | "center"

type ColorMap = Record<BackgroundColor, string>

export const colorMap: ColorMap = {
  none: colors.darkGray,
  white: colors.darkGray,
  green: colors.white,
}

export const bgColorMap: ColorMap = {
  none: "transparent",
  white: colors.white,
  green: colors.primary,
}

export const underlineColorMap: ColorMap = {
  none: colors.primary,
  white: colors.primary,
  green: colors.white,
}
