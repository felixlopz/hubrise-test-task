/**
 * Creates a header anchor from a header text.
 *
 * @param   header - Header text.
 * @example
 *   1.2. Retrieve order => retrieve-order
 */
export function createHeaderAnchor(header: string): string {
  return header
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/^[\d.]+\s/, ``) // Remove leading chapter numbers
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)
}
