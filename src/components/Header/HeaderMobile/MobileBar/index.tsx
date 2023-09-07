import { usePathname } from "next/navigation"

import LanguageLinks from "@components/Header/LanguageLinks"
import { IHeaderLink } from "@components/Header/helpers"
import useClientRoutes from "@hooks/client/useClientRoutes"
import useTranslation from "@hooks/client/useTranslation"
import type { LanguagePaths } from "@utils/locales"
import { generateKey } from "@utils/misc"
import { iconSizes } from "@utils/styles"

import {
  Backdrop,
  Container,
  HeaderTitle,
  StyledMobileBar,
  Header,
  Nav,
  NavLink,
  LanguageItem,
  LanguageList,
  NavLinkLogin,
  LanguageLink,
  HeaderIcon,
} from "./Styles"

interface MobileBarProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
  isOpen: boolean
  close: () => void
}

const MobileBar = ({ languagePaths, menuItems, isOpen, close }: MobileBarProps): JSX.Element => {
  const { t } = useTranslation()
  const { signup, login } = useClientRoutes()
  const currentPathname = usePathname()

  return (
    <StyledMobileBar>
      <Backdrop $isOpen={isOpen} onClick={close} />

      <Container $isOpen={isOpen}>
        <Header onClick={close}>
          <HeaderIcon code="navigate_before" size={iconSizes._32} />
          <HeaderTitle>Menu</HeaderTitle>
        </Header>

        <Nav>
          {menuItems.map(({ title, to }, idx) => {
            const isActive = currentPathname === to
            return (
              <NavLink key={generateKey(title, idx)} href={to} onClick={close} $isActive={isActive}>
                {title}
              </NavLink>
            )
          })}

          <NavLink href={signup} $topMargin={true} $isActive={false}>
            {t(`layout.header.buttons.signup`)}
          </NavLink>

          <NavLinkLogin href={login}>{t(`layout.header.buttons.login`)}</NavLinkLogin>
        </Nav>

        <LanguageList>
          <LanguageLinks languagePaths={languagePaths} MenuItem={LanguageItem} MenuLink={LanguageLink} />
        </LanguageList>
      </Container>
    </StyledMobileBar>
  )
}

export default MobileBar
