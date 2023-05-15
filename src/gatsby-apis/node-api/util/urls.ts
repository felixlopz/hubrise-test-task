import { defaultLocaleCode, LocaleCode } from "../../../utils/locales"

/**
 * Returns a path with a locale code prefix. If the locale code is the default locale code, the path is returned unchanged.
 * @example pathWithLocale("en", "/blog") => "/blog"
 * @example pathWithLocale("fr", "/blog") => "/fr/blog"
 * @param localeCode
 * @param path
 */
export function pathWithLocale(localeCode: LocaleCode, path: string): string {
  if (localeCode === defaultLocaleCode) {
    return path
  } else {
    return `/${localeCode}${path}`
  }
}
