import { LocaleCode } from "@utils/locales"

export interface BlogNode {
  fields: {
    localeCode: LocaleCode
    path: string
  }
  frontmatter: {
    author: string
    heroImageName: string
    date: string
    title: string
  }
  excerpt: string
  body: string
}
