import { usePathname } from "next/navigation"
import * as React from "react"

import useSticky from "@hooks/client/useSticky"
import { AppsYaml } from "@layouts/Apps/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { appsCategoryPath, appsPath } from "@utils/paths"
import { sizes } from "@utils/styles"

import { Item, List, StyledNav, StyledLink, ArrowIcon, Title, MobileNav, MobileList, MobileItem } from "./Styles"

interface NavProps {
  language: Language
  categories: AppsYaml["content"]["categories"]
  allAppsLabel: string
}

const Index = ({ language, categories, allAppsLabel }: NavProps): JSX.Element => {
  const currentPath = usePathname()
  const allAppsPath = appsPath(language)

  const $navRef = React.useRef<HTMLDivElement>(null)
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const [isExpanded, setIsExpanded] = React.useState(false)

  const link = (path: string, isActive: boolean, label: string) => (
    <StyledLink href={path + "#nav"} $isActive={isActive} $isSticky={isSticky}>
      {label}
    </StyledLink>
  )

  return (
    <>
      {/* Static div for anchor linking; required because anchors don't work on sticky elements. */}
      <div id="nav" />

      <StyledNav ref={$navRef} $isSticky={isSticky}>
        <List>
          <Item $isSticky={isSticky}>{link(allAppsPath, allAppsPath === currentPath, allAppsLabel)}</Item>

          {categories.map((category, idx) => {
            const path = appsCategoryPath(language, category.title)
            return (
              <Item key={idx} $isSticky={isSticky}>
                {link(path, path === currentPath, category.title)}
              </Item>
            )
          })}
        </List>
      </StyledNav>
      <MobileNav $isSticky={isSticky}>
        <Title>
          All Pages
          <ArrowIcon onClick={() => setIsExpanded((v) => !v)} code={isExpanded ? "expand_less" : "expand_more"} />
        </Title>
        <MobileList $isExpanded={isExpanded}>
          {categories.map((category, idx) => {
            const path = appsCategoryPath(language, category.title)
            return <MobileItem key={idx}>{link(path, path === currentPath, category.title)}</MobileItem>
          })}
        </MobileList>
      </MobileNav>
    </>
  )
}

export default Index
