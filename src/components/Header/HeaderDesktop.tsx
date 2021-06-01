import * as React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import Link from '@components/Link'
import logo from '@images/logo.png'
import { generateKey } from '@utils/misc'
import { LanguagePaths } from '@utils/context'
import { IHeaderLink } from './helpers'
import LanguageLinks from './LanguageLinks'

interface HeaderDesktopProps {
  languagePaths: LanguagePaths
  menuItems: Array<IHeaderLink>
  path: string
}

const HeaderDesktop = ({
  languagePaths,
  menuItems,
  path
}: HeaderDesktopProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="HubRise" />
        </Link>
      </div>

      <ul className="header__nav">
        {menuItems.map(({ title, to, mobile_only }, idx) => {
          if (mobile_only) return

          return (
            <li key={generateKey(title, idx)} className="header__nav-item">
              <Link
                className={classNames('header__nav-link', {
                  'header__nav-item_active': path.startsWith(to)
                })}
                to={to}
                addLocalePrefix={false}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>

      <ul className="header__nav">
        <LanguageLinks
          languagePaths={languagePaths}
          liClassname="header__nav-item"
          liActiveClassname="header__nav-item_active"
          linkClassname="header__nav-link"
        />
      </ul>

      <div className="header__actions">
        <Link
          className="header__action-signup"
          to="https://manager.hubrise.com/signup"
          newTab={false}
        >
          {t(`layout.header.buttons.signup`)}
        </Link>
        <Link
          className="header__action-login"
          to="https://manager.hubrise.com/login"
          newTab={false}
        >
          {t(`layout.header.buttons.login`)}
        </Link>
      </div>
    </div>
  )
}

export default HeaderDesktop
