import { LocaleCode } from '../utils/locales'
import { ArchiveInfo } from './blog'
import { MDXDocumentationNode } from './mdx'
import { ImageSharpMap } from '../../gatsby/node-api/documentation/image'
import { IBreadcrumb } from './documentation'
import { FolderPage } from '../../gatsby/node-api/documentation/page'
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

export interface DocumentationContext extends RootContext {
  breadcrumbs: Array<IBreadcrumb>
  folderPages: Array<FolderPage>
  folderTitle: string
  imageSharpMap?: ImageSharpMap
  /** The logo filename, eg "deliveroo.png" */
  logoImageName?: string
  /** The chapter title, eg "Deliveroo Bridge" */
  mdxNode: MDXDocumentationNode
}
