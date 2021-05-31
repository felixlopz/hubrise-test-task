import { LocaleCode } from '@utils/locales'
import { ArchiveInfo } from '@components/blog/interface'

export interface BlogListContext {
  localeCode: LocaleCode
  archive?: ArchiveInfo
}
