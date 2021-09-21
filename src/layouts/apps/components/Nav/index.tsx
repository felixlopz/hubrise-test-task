import * as React from "react"
// import { useScrollRestoration } from "gatsby"

import { ICategory } from "../../interface"

import { Item, List, StyledNav, StyledLink } from "./Styles"

import useSticky from "@utils/hooks/useSticky"

interface NavProps {
  categories: Array<ICategory>
  currentPath: string
  allAppsPath: string
  allAppsLabel: string
}

const Index = ({ categories, currentPath, allAppsPath, allAppsLabel }: NavProps): JSX.Element => {
  const $navRef = React.useRef<HTMLDivElement>(null)
  const isSticky = useSticky($navRef, 80)

  return (
    <StyledNav ref={$navRef} isSticky={isSticky}>
      <List>
        <Item key={-1}>
          <StyledLink
            to={allAppsPath}
            addLocalePrefix={false}
            isActive={allAppsPath === currentPath}
            isSticky={isSticky}
          >
            {allAppsLabel}
          </StyledLink>
        </Item>

        {categories.map((category, idx) => {
          return (
            <Item key={idx}>
              <StyledLink
                to={category.path}
                addLocalePrefix={false}
                isActive={category.path === currentPath}
                isSticky={isSticky}
              >
                {category.title}
              </StyledLink>
            </Item>
          )
        })}
      </List>
    </StyledNav>
  )
}

export default Index
