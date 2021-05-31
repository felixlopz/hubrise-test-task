import locales from '@utils/locales'

export function getLocalizedUrl(url, currentLang) {
  const locale = locales.find(({ code }) => code === currentLang)

  if (!locale || locale.default) {
    return url
  } else {
    return `/${locale.code}${url}`
  }
}
