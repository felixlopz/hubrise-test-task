import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Link from './link'

import { generateKey } from './utils'

import logo from '../images/logo.png'
import button from '../images/bread_button.png'

const HeaderMobile = ({ menuItems }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="header-mobile">
      <div className="header-mobile__in">
        {isVisible && (
          <div
            className="header-mobile__overlay"
            onClick={() => setIsVisible(!isVisible)}
          />
        )}
        <div className="header-mobile__inside">
          <div className="mobile-bar">
            <div
              className="mobile-bar__button-wrapper"
              onClick={() => setIsVisible(!isVisible)}
            >
              <button
                id="mobile-bar-button"
                className="mobile-bar__button"
                type="button"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <Link className="mobile-bar__logo" to="/">
              <img src={logo} alt="company-logo" />
            </Link>
          </div>
          {isVisible && (
            <div id="mobile-bar-menu" className="mobile-bar__menu">
              <div className="mobile-bar__header">
                <button
                  className="mobile-bar__close-button"
                  id="mobile-bar-close"
                >
                  <div
                    className="mobile-bar__close-button-icon-wrapper"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <i
                      className={`
                      fa
                      fa-angle-left
                      mobile-bar__close-button-icon
                    `}
                    />
                  </div>
                  <span>Menu</span>
                </button>
              </div>
              <nav className="mobile-bar__content">
                <ul className="leftbar-menu">
                  {menuItems.map(({ to, title }, idx) => (
                    <li
                      key={generateKey(title, idx)}
                      className="leftbar-menu__item"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      <Link to={to} className="leftbar-menu__link">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="header-mobile__action header-mobile__action_sidenav">
                  <Link
                    to="https://manager.hubrise.com/signup"
                    className="header-mobile__action-signup"
                    newTab={false}
                  >
                    {t(`layout.header.buttons.signup`)}
                  </Link>
                  <Link
                    className="header-mobile__action-login"
                    to="https://manager.hubrise.com/login"
                    newTab={false}
                  >
                    {t(`layout.header.buttons.login`)}
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile
