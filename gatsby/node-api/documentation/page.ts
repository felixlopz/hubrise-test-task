import path from 'path'

import {
  defaultLocaleCode,
  LocaleCode,
  localeCodes
} from '../../../src/utils/locales'
import { pathWithLocale } from '../../../src/utils/urls'
import { getLayoutPath } from '../util/layout'
import { Folder, normalizePath } from './folder'
import { getFolderBreadcrumbs } from './breadcrumbs'
import { CreatePageFunction } from '../util/types'
import { MDXNode } from '../../../src/data/mdx'
import { DocumentationContext } from '../../../src/data/context'

export function createDocumentationPage(
  node: MDXNode,
  folder: Folder,
  localeCode: LocaleCode,
  createPage: CreatePageFunction
): void {
  const { id, fileAbsolutePath, frontmatter, fields } = node
  const { layout, meta } = frontmatter
  const currentDirectory = path.dirname(fileAbsolutePath)
  const parentDirectory = path.dirname(currentDirectory)
  const pathToImages = path.join(parentDirectory, 'images')
  const breadcrumbs = getFolderBreadcrumbs(folder, localeCode)

  const folderFiles =
    folder.localeMap[localeCode] || folder.localeMap[defaultLocaleCode]
  if (!folderFiles) return

  const relativePath = normalizePath(
    path.posix.sep + path.relative(process.cwd(), fileAbsolutePath)
  )

  const slug =
    fields.localeSlugMap[localeCode] || fields.localeSlugMap[defaultLocaleCode]

  createPage<DocumentationContext>({
    /** Any valid URL. Must start with a forward slash */
    path: pathWithLocale(localeCode, slug),
    component: getLayoutPath(layout),
    context: {
      id,
      currentAndSiblingPagesFilter: {
        fileAbsolutePath: { glob: normalizePath(`${currentDirectory}/*`) },
        frontmatter: { layout: { eq: 'documentation' } }
      },
      imagesPath: normalizePath(`${pathToImages}/**/*`),
      breadcrumbs,
      meta,
      config: folderFiles.customization,
      lang: localeCode,
      relativePath
    }
  })

  if (localeCode === defaultLocaleCode) {
    /** For every other locale, fallback to content in default locale, if available. */
    const fileName = path.basename(fileAbsolutePath)
    const otherLocaleCodes = localeCodes.filter(
      (localeCode) => localeCode !== defaultLocaleCode
    )
    for (let otherLocaleCode of otherLocaleCodes) {
      const contentFileNames =
        folder.localeMap[otherLocaleCode]?.contentFileNames || []
      if (!contentFileNames.includes(fileName)) {
        createDocumentationPage(node, folder, otherLocaleCode, createPage)
      }
    }
  }
}
