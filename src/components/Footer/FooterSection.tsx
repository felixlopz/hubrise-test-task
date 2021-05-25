import * as React from 'react'

import { IFooter } from '../../data/footer'
import { generateKey } from '../utils'
import Link from '../link'

const FooterSection = ({
  title,
  links
}: IFooter['sections'][number]): JSX.Element => (
  <div className="footer-nav__section">
    <div className="footer-nav__header">{title}</div>

    <ul className="footer-nav__list">
      {links.map(({ title, to }, idx) => (
        <li key={generateKey(title, idx)} className="footer-nav__item">
          <Link to={to} className="footer-nav__item-link">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterSection
