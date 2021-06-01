import { LocaleCode } from '@utils/locales'

export interface RootContext {
  localeCode: LocaleCode
}

export interface YamlContext extends RootContext {
  id: string
}
