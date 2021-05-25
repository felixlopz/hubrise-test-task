import * as React from 'react'
import { useScrollRestoration } from 'gatsby'
import classNames from 'classnames'

import Link from '../link'

interface NavProps {
  categories: Array<string>
  currentCategory?: string
  allAppsLabel: string
}

const Nav = ({
  categories,
  currentCategory,
  allAppsLabel
}: NavProps): JSX.Element => {
  const ulScrollRestoration = useScrollRestoration('apps-nav')

  // Remove when https://github.com/gatsbyjs/gatsby/pull/27982 is merged
  const ulScrollRestorationPatchedType = ulScrollRestoration as {
    ref: React.MutableRefObject<HTMLUListElement | null>
    onScroll(): void
  }

  return (
    <div className="apps-nav">
      <ul className="apps-nav__list" {...ulScrollRestorationPatchedType}>
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

export default Nav
