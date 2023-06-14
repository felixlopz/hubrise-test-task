import React, { useEffect, useState } from "react"
import { useMedia } from "react-use"
import { useTranslation } from "react-i18next"

import { useSidebarData } from "./graphql"
import { generateArchiveList, getArchiveTitle, getArchiveLink } from "./helpers"
import { ArrowIcon, Menu, MenuItem, ItemLink, MenuList, MenuTitle } from "./Styles"

import { useLocaleCode } from "@utils/locales"
import { breakpoints } from "@utils/styles"

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation()
  const localeCode = useLocaleCode()

  const sidebarArticles = useSidebarData().filter((sidebarArticle) => sidebarArticle.localeCode === localeCode)

  const archiveList = generateArchiveList(sidebarArticles.map((sidebarArticle) => new Date(sidebarArticle.date)))
  const isSticky = !useMedia(`(min-width: ${breakpoints.blogStickyMenu})`)

  const [isArchiveExpanded, setArchiveExpanded] = useState(true)

  useEffect(() => {
    setArchiveExpanded(!isSticky)
  }, [isSticky])

  return (
    <Menu>
      <MenuTitle onClick={() => isSticky && setArchiveExpanded((prev) => !prev)}>
        {t("blog.by_month")}
        <ArrowIcon className={isArchiveExpanded ? "fa fa-angle-up" : "fa fa-angle-down"} />
      </MenuTitle>

      <MenuList $isSelected={isArchiveExpanded}>
        {archiveList.map((archiveInfo) => (
          <MenuItem key={[archiveInfo.year, archiveInfo.month].join("_")}>
            <ItemLink to={getArchiveLink(archiveInfo)} activeClassName="active">
              {getArchiveTitle(archiveInfo, t)}
            </ItemLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Sidebar

export { getArchiveTitle, generateArchiveList } from "./helpers"
