import locales from './locales'

/**
 * Determines language code based on provided path.
 * If there is no prefix in path, finds and returns default value.
 *
 * @example:
 *  '/es/applicaciones' => 'es'.
 *
 * @param   path - page URL.
 * @returns Short language code.
 */
export const getLanguage = (path: string): string => {
  const regex = /\/(?<languageCode>[a-z]{2})\//
  const result = regex.exec(path)

  if (result?.groups) {
    return result.groups.languageCode
  } else {
    const { code } =
      locales.find((locale) => locale.default === true) || locales[0]
    return code
  }
}
