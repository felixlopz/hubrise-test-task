export type LocaleCode = 'en' | 'fr'
export const localeCodes: Array<LocaleCode> = ['en', 'fr']
export const defaultLocaleCode: LocaleCode = 'en'

export const getLocaleCodeFromAbsolutePath = (
  absolutePath: string
): LocaleCode => {
  const pathItems = absolutePath.split('/')
  return pathItems[pathItems.length - 2] as LocaleCode
}

export function getLocale(localeCode): string {
  return {
    en: 'en-GB',
    fr: 'fr-FR'
  }[localeCode]
}

/* TODO: Remove the rest of the file */
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

export default locales
