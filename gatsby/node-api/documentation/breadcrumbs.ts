import { Folder } from './folder'
import { defaultLocaleCode, LocaleCode } from '../../../src/utils/locales'

export interface Breadcrumb {
  value: string
  label?: string
}

export function getFolderBreadcrumbs(
  folder: Folder,
  localeCode: LocaleCode
): Array<Breadcrumb> {
  const breadcrumbs: Array<Breadcrumb> = []

  let currentFolder: Folder | undefined = folder

  while (currentFolder) {
    const folderFiles =
      currentFolder.localeMap[localeCode] ||
      currentFolder.localeMap[defaultLocaleCode]
    const customization = folderFiles?.customization

    if (customization?.path_override) {
      const breadcrumb: Breadcrumb = {
        value: customization.path_override,
        label: customization.name
      }
      breadcrumbs.unshift(breadcrumb)
    }

    currentFolder = currentFolder.parent
  }

  return breadcrumbs
}
