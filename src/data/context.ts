import { Customization } from '../../gatsby/node-api/documentation/customization'
import { IBreadcrumb } from './documentation'
import { LocaleCode } from '../utils/locales'
import { ArchiveInfo } from './blog'

export interface BaseContext {
  id: string
  lang: LocaleCode
}

export interface AppsContext extends BaseContext {
  category?: string
}

export interface BlogListContext extends BaseContext {
  archive?: ArchiveInfo
}

export interface DocumentationContext extends BaseContext {
  relativePath: string
  imagesPath: string
  meta?: {
    title?: string
    description?: string
  }
  breadcrumbs: Array<IBreadcrumb>
  currentAndSiblingPagesFilter: {
    fileAbsolutePath: object
    frontmatter: { layout: { eq: string } }
  }
  config: Customization
}
