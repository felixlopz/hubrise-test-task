import { LocaleCode } from '../utils/locales'

export interface MDXNode {
  id: string
  body: string
  fields: {
    slug: string
    contentLang: string
    localeSlugMap: {
      [K in LocaleCode]: string
    }
  }
  fileAbsolutePath: string
  frontmatter: {
    app_info: {
      category?: string
      availability?: string
      price_range?: string
      website?: string
      contact?: string
    }
    author?: string
    content: {
      hero: {
        description: {
          paragraph_1: string
          paragraph_2: {
            button: string
            text: string
          }
        }
        title: string
      }
      thumbs: Array<{
        description: string
        icon: string
        title: string
        to: string
      }>
    }
    date?: string
    excerpt?: string
    gallery?: Array<string>
    layout: string
    meta?: {
      title?: string
      description?: string
    }
    path_override?: string
    position?: number
    title: string
  }
}
