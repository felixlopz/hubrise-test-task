import { LocaleCode } from '@utils/locales'

export interface RootContext {
  localeCode: LocaleCode
}

export interface BaseContext extends RootContext {
  id: string
}
