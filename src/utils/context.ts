import { LocaleCode } from '@utils/locales'

export type LanguagePaths = {
  /** For each locale, the path of the corresponding page (eg. {en: '/docs/deliveroo', fr: '/fr/docs/deliveroo'}) */
  [K in LocaleCode]?: string
}

export interface RootContext {
  languagePaths: LanguagePaths
  localeCode: LocaleCode
}

export interface YamlContext extends RootContext {
  id: string
}
