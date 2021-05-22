import { Folder } from './folder'
import { defaultLocaleCode, LocaleCode } from '../../../src/utils/locales'

export interface Breadcrumb {
  value: string
  label?: string
}

export function getFolderBreadcrumbs(
  folderNode: Folder,
  localeCode: LocaleCode
): Array<Breadcrumb> {
  const breadcrumbs: Array<Breadcrumb> = []

  let currentNode: Folder | undefined = folderNode

  while (currentNode) {
    const folderFiles =
      currentNode.localeMap[localeCode] ||
      currentNode.localeMap[defaultLocaleCode]
    const customization = folderFiles?.customization

    if (customization?.path_override) {
      const breadcrumb: Breadcrumb = {
        value: customization.path_override,
        label: customization.name
      }
      breadcrumbs.unshift(breadcrumb)
    }

    currentNode = currentNode.parent
  }

  return breadcrumbs
}
