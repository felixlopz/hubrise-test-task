/**
 * Convert a rem size (eg "5rem") into a number of pixels (80).
 */
export const remIntoPixels = (rem: string): number => {
  const nbRem = Number(rem.replace("rem", ""))
  const remPerPx = Number(window.getComputedStyle(document.documentElement).fontSize.replace("px", ""))
  return nbRem * remPerPx
}
