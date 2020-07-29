const path = require(`path`)
const util = require('util')
const {
  getContentLangFromPath,
  parseFolderRecursively,
  findFolderNodeByFilePath,
  getFolderNodeBreadcrumbs,
  getDefaultLocale
} = require('./utils')
const locales = require('../../src/i18n/locales')

function getLocaleSlugMap(mdxNode, currentFolderNode) {
  const { fileAbsolutePath, frontmatter } = mdxNode

  const localeSlugMap = {}

  Object.values(locales).forEach((locale) => {
    const localeFolderEntry =
      currentFolderNode.localeMap[locale.code] ||
      currentFolderNode.localeMap[getDefaultLocale().code]

    const config = localeFolderEntry.customization

    const breadcrumbs = getFolderNodeBreadcrumbs(currentFolderNode, locale)

    let fileName = path.basename(
      fileAbsolutePath,
      path.extname(fileAbsolutePath)
    )

    if (config.path_override === 'blog') {
      /** "2020-01-29_article-title" -> "article-title" */
      fileName = fileName.slice(11)
    }

    let slug = [
      ...breadcrumbs.map((breadcrumb) => breadcrumb.value),
      frontmatter.path_override ? frontmatter.path_override : fileName
    ]
      .filter((part) => part !== '/')
      .join('/')
      .replace(/_/g, `-`)

    slug = slug ? `/${slug}/` : '/'

    localeSlugMap[locale.code] = slug
  })

  return localeSlugMap
}

function getNodeCreationHook() {
  const parsedContentPromise = parseFolderRecursively({
    pathToFolder: process.cwd(),
    folderName: 'content'
  })

  async function onCreateNode({ node, actions }) {
    if (node.internal.type === `Mdx`) {
      const { createNodeField } = actions
      const { fileAbsolutePath } = node

      const parsedContent = await parsedContentPromise
      const currentFolderNode = findFolderNodeByFilePath(
        parsedContent,
        fileAbsolutePath
      )

      const localeCode = getContentLangFromPath(fileAbsolutePath)

      const localeSlugMap = getLocaleSlugMap(node, currentFolderNode)

      createNodeField({
        node,
        name: `slug`,
        value: localeSlugMap[localeCode]
      })

      createNodeField({
        node,
        name: `localeSlugMap`,
        value: localeSlugMap
      })

      createNodeField({
        node,
        name: `contentLang`,
        value: localeCode
      })
    }
  }

  return onCreateNode
}

module.exports = getNodeCreationHook()
