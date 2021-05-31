import { LocaleCode } from '@utils/locales'
import { ArchiveInfo } from '@components/blog/interface'

export interface BlogListContext {
  archive?: ArchiveInfo
  localeCode: LocaleCode
  mainBlogPath: string
}
