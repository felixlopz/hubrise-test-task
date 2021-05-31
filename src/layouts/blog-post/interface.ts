import { LocaleCode } from '@utils/locales'

export interface BlogPostContext {
  localeCode: LocaleCode
  mainBlogPath: string
  mdxNodeId: string
}
