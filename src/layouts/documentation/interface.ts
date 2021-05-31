import { LocaleCode } from '@utils/locales'
import { Breadcrumb } from '@components/Breadcrumbs'

export interface DocumentationContext {
  /** Array of paths leading up to the page. */
  breadcrumbs: Array<Breadcrumb>
  /** List of neighbour pages of the current page, sorted by position. Used for navigation. */
  folderPages: Array<FolderPage>
  /** The chapter title, eg "Deliveroo Bridge" */
  folderTitle: string
  /** Locale code of the page */
  localeCode: LocaleCode
  /** The logo filename, eg "deliveroo.png" */
  logoImageName?: string
  /** The id of the MDX node */
  mdXNodeId: string
  /** The path of the images directory, relative to "content", with no leading slash (eg "contributing/images"). */
  imagesRelativeDirectory: string
}

export interface FolderPage {
  path: string
  title: string
}
