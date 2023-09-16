import { Element } from "hast"
import type { Processor } from "unified"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import { defaultLanguage, getBackOfficeLocale, Language } from "@utils/locales"
import { Router } from "@utils/router"

import { Href } from "../DocIndexer/types"
import { ContentDirName } from "../files"

/**
 * A Rehype plugin to rewrite anchor (`<a>`) href attributes in the documentation.
 *
 * - Local Links (links starting with `/`).  The path in the original link can either be:
 *   - A relative path without the language prefix (e.g. `/apps/nestor/connexion-hubrise`)
 *   - A filepath without the language prefix (e.g. `/apps/nestor/connect-hubrise`)
 *   The language prefix is added unless the current language is the default language.
 *
 * - HubRise Manager Link (https://manager.hubrise.com): the `locale` query parameter is added if not present.
 *
 * - External Links & Anchors: These are left untouched.
 *
 * @param router The Router instance
 * @param language The language to use for the links
 * @param pageHref The href of the rendered page, used for error reporting
 */
export default function rehypeLinkRewritePlugin(router: Router, language: Language, pageHref: Href) {
  return function plugin(this: Processor) {
    return async function transformer(tree: Node, _file: VFile): Promise<void> {
      visit(tree, "element", (node: Element) => {
        if (node.tagName === "a" && node.properties && node.properties.href) {
          let href = node.properties.href as string
          if (href.startsWith("/")) {
            href = rewriteLocalLink(href, router, language, pageHref)
          } else if (href.startsWith("https://manager.hubrise.com") && !href.includes("locale=")) {
            const separator = href.includes("?") ? "&" : "?"
            href += separator + `locale=${getBackOfficeLocale(language)}`
          }
          node.properties.href = href
        }
      })
    }
  }
}

/**
 * Rewrite a local link by conditionally adding a language prefix and matching it against available routes.
 *
 * @param href The original href to be rewritten.
 * @param router
 * @param language The language to use to rewrite the link.
 * @param pageHref The href of the rendered page, used for error reporting
 *
 * @returns The rewritten href.
 *
 * @throws Error if no corresponding route is found.
 */
function rewriteLocalLink(href: string, router: Router, language: Language, pageHref: Href): string {
  // Decompose href into path and anchor, remove trailing slash from path
  // eslint-disable-next-line prefer-const
  let [path, anchor] = href.split("#")
  path = path.replace(/\/$/, "")

  // Helper to append anchor back to href
  const withAnchor = (someHref: string): string => [someHref, anchor].filter(Boolean).join("#")

  // Attempt to find route by href
  const hrefWithLanguage = language === defaultLanguage ? path : `/${language}${path}`
  if (router.getRouteFromHref(hrefWithLanguage)) return withAnchor(hrefWithLanguage)

  // Fallback to finding route by filepath
  // path = /apps/0test/faqs/connect-hubrise => contentDirName = "/apps/0test/faqs", basename = "connect-hubrise"
  const pathElements = path.split("/")
  const basename = pathElements.pop()!
  const contentDirName = pathElements.join("/") as ContentDirName

  const route = router.findDocumentationRoute(contentDirName, basename)
  if (route) return withAnchor(route.href)

  throw new Error(`${pageHref}: link "${href}" not found`)
}
