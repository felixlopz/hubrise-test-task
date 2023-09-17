import { Element } from "hast"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import type { Processor } from "unified"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

import CallSummaryTable from "@components/DocumentationMdxRenderer/components/CallSummaryTable"
import ContactFormToggle from "@components/DocumentationMdxRenderer/components/ContactFormToggle"
import InlineImage from "@components/DocumentationMdxRenderer/components/InlineImage"
import Label from "@components/DocumentationMdxRenderer/components/Label"
import { defaultLanguage, getBackOfficeLocale, Language } from "@utils/locales"
import { Router } from "@utils/router"

import { BlogMdFile } from "../BlogIndexer/types"
import { DocMdFile, Href } from "../DocIndexer/types"
import { ContentDirName } from "../files"
import { LayoutName, Route, RouteName } from "../router/types"

import remarkHeadingsPlugin, { HeaderLink } from "./remarkHeadingsPlugin"

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
      const routeWithAnchors: Array<RouteWithAnchor> = []

      visit(tree, "element", (node: Element) => {
        if (node.tagName === "a" && node.properties && node.properties.href) {
          let href = node.properties.href as string
          if (href.startsWith("/")) {
            href = rewriteLocalLink(href, router, language, pageHref, routeWithAnchors)
          } else if (href.startsWith("https://manager.hubrise.com") && !href.includes("locale=")) {
            const separator = href.includes("?") ? "&" : "?"
            href += separator + `locale=${getBackOfficeLocale(language)}`
          }
          node.properties.href = href
        }
      })

      await Promise.all(routeWithAnchors.map(checkAnchor(pageHref)))
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
 * @param routeWithAnchors An array that will be populated if href contains an anchor.
 *
 * @returns The rewritten href.
 *
 * @throws Error if no corresponding route is found.
 */
function rewriteLocalLink(
  href: string,
  router: Router,
  language: Language,
  pageHref: Href,
  routeWithAnchors: Array<RouteWithAnchor>,
): string {
  // Decompose href into path and anchor, remove trailing slash from path
  // eslint-disable-next-line prefer-const
  let [path, anchor] = href.split("#")
  path = path.replace(/\/$/, "")

  // Append anchor back to href
  const withAnchor = (route: Route<RouteName, LayoutName>) => {
    if (anchor) routeWithAnchors.push({ route, anchor })
    return [route.href, anchor].filter(Boolean).join("#")
  }

  // Attempt to find route by href
  const hrefWithLanguage = language === defaultLanguage ? path : `/${language}${path}`
  let route = router.getRouteFromHref(hrefWithLanguage)
  if (route) return withAnchor(route)

  // Fallback to finding route by filepath
  // path = /apps/0test/faqs/connect-hubrise => contentDirName = "/apps/0test/faqs", basename = "connect-hubrise"
  const pathElements = path.split("/")
  const basename = pathElements.pop()!
  const contentDirName = pathElements.join("/") as ContentDirName

  route = router.findDocumentationRoute(contentDirName, basename)
  if (route) return withAnchor(route)

  throw new Error(`${pageHref}: link "${href}" not found`)
}

function checkAnchor(pageHref: string) {
  return async function (routeWithAnchor: RouteWithAnchor): Promise<void> {
    const { route, anchor } = routeWithAnchor
    if (!("mdFile" in route.context)) return
    const anchors = await getAnchors(route.context.mdFile)
    if (!anchors.includes(anchor)) {
      throw new Error(
        `${pageHref}: anchor "${anchor}" does not exist in ${route.href}.\n` +
          `Available anchors: ${anchors.join(", ")}`,
      )
    }
  }
}

async function getAnchors(mdFile: DocMdFile | BlogMdFile): Promise<Array<string>> {
  const headerLinks: Array<HeaderLink> = []
  await compileMDX({
    source: mdFile.content,
    components: {
      CallSummaryTable,
      ContactFormToggle,
      InlineImage,
      Label,
      // Link: () => (<span>Link</span>),
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkHeadingsPlugin, headerLinks]],
        rehypePlugins: [],
      },
    },
  })
  return headerLinks.map((link) => link.id)
}

type RouteWithAnchor = { route: Route<RouteName, LayoutName>; anchor: string }
