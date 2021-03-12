import React from 'react'
import { useScrollRestoration } from 'gatsby'
import Link from '../../link'
import classNames from 'classnames'

export const Nav = ({ categories, currentCategory, allAppsLabel }) => {
  const ulScrollRestoration = useScrollRestoration('apps-nav')

  return (
    <div className="apps-nav">
      <ul className="apps-nav__list" {...ulScrollRestoration}>
        {[undefined, ...categories].map((category, idx) => {
          const slug = category
            ? category.replace(/ +/g, '-').toLowerCase()
            : ''
          return (
            <li className="apps-nav__item" key={idx}>
              <Link
                to={`/apps/${slug}`}
                className={classNames(
                  'apps-nav__link',
                  category === currentCategory && 'apps-nav__link_active'
                )}
              >
                {category || allAppsLabel}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
