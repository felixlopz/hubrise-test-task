const path = require(`path`)
const {
  getCustomizationFromFolder,
  getBreadcrumbs,
  getContentLangFromPath
} = require('./utils')

const onCreateNode = async ({ node, actions }) => {
  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions
    const { fileAbsolutePath, frontmatter } = node
    const config = await getCustomizationFromFolder(
      path.dirname(fileAbsolutePath)
    )
    const breadcrumbs = await getBreadcrumbs(
      fileAbsolutePath,
      path.join(process.cwd(), 'content')
    )

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

    // console.log('slug', slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })

    // console.log('contentLang', getContentLangFromPath(fileAbsolutePath))
    createNodeField({
      node,
      name: `contentLang`,
      value: getContentLangFromPath(fileAbsolutePath)
    })
  }
}

module.exports = onCreateNode
