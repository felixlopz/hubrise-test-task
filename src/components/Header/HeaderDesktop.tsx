import * as React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import Link from '../Link'
import { generateKey } from '../utils'
import logo from '../../images/logo.png'
import { IHeaderLink } from '../../data/header'

interface HeaderDesktopProps {
  path: string
  menuItems: Array<IHeaderLink>
}

const HeaderDesktop = ({
  path,
  menuItems
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
                  'header__nav-link_active': path.startsWith(to)
                })}
                to={to}
              >
                {title}
              </Link>
            </li>
          )
        })}
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
