import React from 'react'
import Link from './link'

import HeaderMobile from './header_mobile'

import logo from '../images/logo.png'

export const nav = [
  {
    to: `/pricing`,
    title: `Pricing`
  },
  {
    to: `/developers`,
    title: `Developers`
  },
]

const Header = () => (
  <header className="header">
    <div className="header__in">
      <div className="header__desktop" data-floater-desktop-header>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="company-logo" />
          </Link>
        </div>
        <nav className="topbar-menu">
          <ul className="topbar-menu__list">
            {nav.map(({ to, title }, idx) => (
              <li
                key={`${title}--${idx}`}
                className="topbar-menu__item"
              >
                <Link className="topbar-menu__link" to={to}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__action">
          <Link
            className="header__action-signup"
            to="https://manager.hubrise.com/signup"
          >
            Sign up
          </Link>
          <button
            className="header__action-login"
          >
            <Link
              to="https://manager.hubrise.com/login"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
      <HeaderMobile />
    </div>
  </header>
)

export default Header
