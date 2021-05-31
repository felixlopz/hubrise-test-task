import { MDXBlogNode } from '../../data/mdx'
import { getMdxBlogNodeDate } from '@components/blog/Post'

export function sortMdxBlogNodesByDescendingDate(
  mdxNodes: Array<MDXBlogNode>
): Array<MDXBlogNode> {
  return mdxNodes.sort(
    (a, b) => getMdxBlogNodeDate(b).getTime() - getMdxBlogNodeDate(a).getTime()
  )
}
