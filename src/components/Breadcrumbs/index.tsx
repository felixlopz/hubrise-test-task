import * as React from 'react'

import { IBreadcrumb } from './context'
import Link from '../Link'

interface BreadcrumbsProps {
  breadcrumbs: Array<IBreadcrumb>
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  return (
    <section className="breadcrumbs-wrapper">
      <ul className="breadcrumbs-wrapper__list">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="breadcrumbs-wrapper__list-item">
            {breadcrumb.path ? (
              <Link
                to={breadcrumb.path}
                addLocalePrefix={false}
                className="breadcrumbs-wrapper__list-item_link"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              breadcrumb.label
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Breadcrumbs
