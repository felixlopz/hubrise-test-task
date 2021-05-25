import React from 'react'

import Link from '../link'
import { IBreadcrumb } from '../../data/documentation'

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
