"use client"

import NextLink from "next/link"
import { AnchorHTMLAttributes } from "react"

import { useLayoutContext } from "@components/LayoutContext"
import { defaultLanguage, getBackOfficeLocale } from "@utils/locales"

const A = ({ href, ...otherProps }: AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element | null => {
  const { language } = useLayoutContext()

  if (!href) return <></>

  if (href.startsWith("/")) {
    // Internal link.
    // Use Next router.
    return <NextLink href={language === defaultLanguage ? href : `/${language}${href}`} {...otherProps} />
  } else {
    // External link.
    // Open in new tab.
    let finalHref = href
    let newTabProps = {}
    if (!href.startsWith("#")) {
      newTabProps = {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    }

    // Add ?locale=xxx for the HubRise back office.
    if (href.startsWith("https://manager.hubrise.com") && !href.includes("locale=")) {
      const separator = href.includes("?") ? "&" : "?"
      finalHref = href + separator + `locale=${getBackOfficeLocale(language)}`
    }

    // Use plain <a> tag.
    return <a href={finalHref} {...newTabProps} {...otherProps} />
  }
}

export default A
