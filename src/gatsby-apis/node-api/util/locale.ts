import {
  defaultLocaleCode,
  LocaleCode,
  localeCodes
} from '../../../utils/locales'
import { LanguagePaths } from '@utils/context'

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

export function generateLanguagePaths(
  localeCode: LocaleCode,
  getPath: (code) => string
): LanguagePaths {
  const languagePaths: LanguagePaths = {}
  for (let otherLocaleCode of localeCodes) {
    if (otherLocaleCode === localeCode) continue
    languagePaths[otherLocaleCode] = getPath(otherLocaleCode)
  }
  return languagePaths
}
