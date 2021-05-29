import { Folder, getFolderFiles, getFolderPath } from './folder'
import { LocaleCode } from '../../../src/utils/locales'
import { IBreadcrumb } from '../../../src/data/documentation'

/**
 * Returns the list of breadcrumbs leading up to a page.
 * @param folder: the direct parent folder of the page (eg the apps/deliveroo folder)
 * @param localeCode
 * @param nodeTitle: the page name (eg "map-ref-codes")
 */
export function getBreadcrumbs(
  folder: Folder,
  localeCode: LocaleCode,
  nodeTitle: string
): Array<IBreadcrumb> {
  function getFolderBreadcrumbs(folder: Folder): Array<IBreadcrumb> {
    if (!folder.parent) return []

    let parentBreadcrumbs = getFolderBreadcrumbs(folder.parent)
    const customization = getFolderFiles(folder, localeCode)?.customization

    return parentBreadcrumbs.concat({
      label: customization?.name || folder.name,
      path: getFolderPath(folder, localeCode)
    })
  }

  return getFolderBreadcrumbs(folder).concat({
    label: nodeTitle
  })
}
