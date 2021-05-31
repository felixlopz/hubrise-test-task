import { LocaleCode } from '../utils/locales'
import { ArchiveInfo } from './blog'
import { IApps } from './apps'

export interface RootContext {
  localeCode: LocaleCode
}

export interface BaseContext extends RootContext {
  id: string
}

export interface AppsContext extends RootContext {
  apps: IApps
  categoryTitle?: string
}

export interface BlogListContext extends RootContext {
  archive?: ArchiveInfo
}

