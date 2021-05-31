import { LocaleCode } from '../../../utils/locales'
import { MDXBlogNode } from './graphql'

export function filterNodesByLocale(
  nodes: Array<MDXBlogNode>,
  localeCode: LocaleCode
): Array<MDXBlogNode> {
  // MDX files must be in a directory ending in /en or /fr, indicating the locale code of the MDX.
  return nodes.filter(
    (node) => parseBlogSlug(node.slug).localeCode === localeCode
  )
}

export function parseBlogSlug(
  relativePath: string
): { localeCode: LocaleCode; name: string } {
  //  The `slug` is the file path relative to "/content", eg: "blog/fr/20200712-pourquoi-j-ai-cree-hubrise"
  // It contains the locale and the blog name.
  const [, localeCode, name] = relativePath.match(/blog\/(.*)\/(.*)/)!
  return {
    localeCode: localeCode as LocaleCode,
    name
  }
}
