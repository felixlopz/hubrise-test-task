import * as React from 'react'

import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'
import { getLocaleCodeFromAbsolutePath, LocaleCode } from '@utils/locales'
import { LanguagePaths } from '@utils/context'
import { useHeaderData } from './graphql'

interface HeaderProps {
  path: string
  languagePaths: LanguagePaths
  localeCode: LocaleCode
}

const Header = ({
  path,
  languagePaths,
  localeCode
}: HeaderProps): JSX.Element => {
  const headerNodeInLocale = useHeaderData().allFile.nodes.find(
    ({ absolutePath }) =>
      getLocaleCodeFromAbsolutePath(absolutePath) === localeCode
  )
  if (!headerNodeInLocale)
    throw `menu-header.yaml not defined for locale ${localeCode}`

  const menuItems = headerNodeInLocale.childYaml.parsedContent

  return (
    <React.Fragment>
      <HeaderDesktop
        path={path}
        languagePaths={languagePaths}
        menuItems={menuItems}
      />
      <HeaderMobile
        path={path}
        languagePaths={languagePaths}
        menuItems={menuItems}
      />
    </React.Fragment>
  )
}

export default Header
