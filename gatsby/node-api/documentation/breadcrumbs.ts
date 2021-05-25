import { Folder } from './folder'
import { defaultLocaleCode, LocaleCode } from '../../../src/utils/locales'
import { IBreadcrumb } from '../../../src/data/documentation'

export function getFolderBreadcrumbs(
  folder: Folder,
  localeCode: LocaleCode
): Array<IBreadcrumb> {
  const breadcrumbs: Array<IBreadcrumb> = []

  let currentFolder: Folder | undefined = folder

  while (currentFolder) {
    const folderFiles =
      currentFolder.localeMap[localeCode] ||
      currentFolder.localeMap[defaultLocaleCode]
    const customization = folderFiles?.customization

    if (customization?.path_override) {
      breadcrumbs.unshift({
        label: customization.name || '',
        path: customization.path_override
      })
    }

    currentFolder = currentFolder.parent
  }

  return breadcrumbs
}
