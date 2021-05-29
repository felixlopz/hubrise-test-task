import { LocaleCode } from '../utils/locales'
import { MDXBlogNode } from './mdx'

export interface ArchiveInfo {
  year: number
  month: number
  isCurrentYear: boolean
}

export function parseBlogSlug(
  slug: string
): { localeCode?: LocaleCode; name?: string } {
  // slug is the file path relative to "/content", eg: "blog/fr/20200712-pourquoi-j-ai-cree-hubrise"
  // The slug contains both the locale and the blog name
  const [, localeCode, name] = slug.match(/blog\/(.*)\/(.*)/)!
  return {
    localeCode: localeCode as LocaleCode,
    name
  }
}

export function getMdxBlogNodeDate(mdxNode: MDXBlogNode): Date {
  const { frontmatter, slug } = mdxNode
  if (!frontmatter.date) throw `Missing date on blog post ${slug}`
  return new Date(frontmatter.date)
}

export function sortMdxBlogNodesByDescendingDate(
  mdxNodes: Array<MDXBlogNode>
): Array<MDXBlogNode> {
  return mdxNodes.sort(
    (a, b) => getMdxBlogNodeDate(b).getTime() - getMdxBlogNodeDate(a).getTime()
  )
}
