import { LocaleCode } from "../../../utils/locales"

import { MDXBlogNode } from "./graphql"

export function filterNodesByLocale(nodes: Array<MDXBlogNode>, localeCode: LocaleCode): Array<MDXBlogNode> {
  return nodes.filter((node) => node.fileAbsolutePath.includes(`/blog/${localeCode}/`))
}

export function parseMdxNodeAbsolutePath(absolutePath: string): { localeCode: LocaleCode; name: string } {
  // Example fileAbsolutePath: /var/www/website/content/blog/en/20230510-catalog-variants/__post.md
  const slugElements = absolutePath.split("/").reverse()
  const [, folder, localeCode] = slugElements

  return {
    localeCode: localeCode as LocaleCode,
    name: folder.replace(/^\d{8}-/, ""), // Strip the date
  }
}
