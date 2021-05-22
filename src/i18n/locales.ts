type LocaleCode = 'en' | 'fr'

type Locale = {
  code: LocaleCode
  tag: string
  default?: boolean
}

const locales: Array<Locale> = [
  {
    code: `en`,
    tag: `en-GB`,
    default: true
  },
  {
    code: `fr`,
    tag: `fr-FR`
  }
]

const defaultLocale: Locale = locales[0]

const localeCodeList = locales.map((locale) => locale.code)

export type { Locale, LocaleCode }
export { defaultLocale, localeCodeList }
export default locales
