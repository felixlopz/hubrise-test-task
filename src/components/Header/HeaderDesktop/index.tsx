"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"
import type { LanguagePaths } from "@utils/locales"
import { generateKey } from "@utils/misc"

import LanguageLinks from "../LanguageLinks"
import { IHeaderLink } from "../helpers"

import { StyledHeader, Menu, MenuItem, MenuLink, Signup, Login } from "./Styles"

interface HeaderDesktopProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
}

const HeaderDesktop = ({ languagePaths, menuItems }: HeaderDesktopProps): JSX.Element => {
  const { t } = useTranslation()
  const { home, signup, login } = useClientRoutes()
  const currentPathname = usePathname()

  return (
    <StyledHeader>
      <div>
        <Link href={home}>
          <Image src="/images/logo.png" alt="HubRise" width={150} height={40} />
        </Link>
      </div>

      <Menu>
        {menuItems.map(({ title, to, mobile_only }, idx) => {
          if (mobile_only) return
          const isActive = currentPathname === to
          return (
            <MenuItem key={generateKey(title, idx)} $isActive={isActive}>
              <MenuLink href={to} $isActive={isActive}>
                {title}
              </MenuLink>
            </MenuItem>
          )
        })}
      </Menu>

      <Menu>
        <LanguageLinks languagePaths={languagePaths} MenuItem={MenuItem} MenuLink={MenuLink} />
      </Menu>

      <div>
        <Signup href={signup}>{t(`layout.header.buttons.signup`)}</Signup>
        <Login href={login}>{t(`layout.header.buttons.login`)}</Login>
      </div>
    </StyledHeader>
  )
}

export default HeaderDesktop
