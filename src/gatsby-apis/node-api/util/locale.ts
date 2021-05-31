import { defaultLocaleCode, LocaleCode, localeCodes } from '@utils/locales'

/**
 * Extract the locale from a file path.
 * Example: "/apps/deliveroo/en/map-ref-codes.md" => "en"
 * @param relativePath
 */

export function getLocaleCodeFromFilePath(relativePath: string): LocaleCode {
  const pathItems = relativePath.split('/')
  const pathSub = pathItems[pathItems.length - 2]
  const localeCode: LocaleCode =
    localeCodes.find((localeCode) => localeCode === pathSub) ||
    defaultLocaleCode
  return localeCode
}
