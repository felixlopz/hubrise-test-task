import { MDXNode } from './mdx'

export interface IBreadcrumb {
  label: string
  path?: string
}

export function getMdxNodeDate(mdxNode: MDXNode): Date {
  const { frontmatter, fileAbsolutePath } = mdxNode
  if (!frontmatter.date) throw `Missing date on blog post ${fileAbsolutePath}`
  return new Date(frontmatter.date)
}

export function sortMdxNodesByDescendingDate(
  mdxNodes: Array<MDXNode>
): Array<MDXNode> {
  return mdxNodes.sort(
    (a, b) => getMdxNodeDate(b).getTime() - getMdxNodeDate(a).getTime()
  )
}
