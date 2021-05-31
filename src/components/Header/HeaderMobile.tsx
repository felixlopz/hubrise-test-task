import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import Link from '@components/Link'
import { generateKey } from '../utils'
import button from '@images/bread_button.png'
import logo from '@images/logo.png'
import { IHeaderLink } from './helpers'

interface HeaderMobileProps {
  path: string
  menuItems: Array<IHeaderLink>
}

const HeaderMobile = ({ path, menuItems }: HeaderMobileProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <div className="header-mobile">
        <div
          className="header-mobile__button"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={button} alt="Menu" />
        </div>
        <div className="header-mobile__logo">
          <Link className="header-mobile__logo-link" to="/">
            <img src={logo} alt="HubRise" />
          </Link>
        </div>
      </div>

      <div className="mobile-bar">
        <div
          className={classNames('mobile-bar__backdrop', {
            'mobile-bar__backdrop_open': isMenuOpen
          })}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={classNames('mobile-bar__menu', {
            'mobile-bar__menu_open': isMenuOpen
          })}
        >
          <header
            className="mobile-bar__header"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-bar__header-button">
              <i className="fa fa-angle-left" />
            </div>
            <div className="mobile-bar__header-title">Menu</div>
          </header>
          <div className="mobile-bar__nav">
            {menuItems.map(({ title, to }, idx) => {
              return (
                <Link
                  key={generateKey(title, idx)}
                  className={classNames('mobile-bar__nav-link', {
                    'mobile-bar__nav-link_active': path.startsWith(to)
                  })}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              )
            })}
            <Link
              className="mobile-bar__nav-link mobile-bar__nav-link_signup"
              to="https://manager.hubrise.com/signup"
              newTab={false}
            >
              {t(`layout.header.buttons.signup`)}
            </Link>
            <Link
              className="mobile-bar__login"
              to="https://manager.hubrise.com/login"
              newTab={false}
            >
              {t(`layout.header.buttons.login`)}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
