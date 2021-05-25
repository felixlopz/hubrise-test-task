import * as React from 'react'

import Link from '../link'
import { generateKey } from '../utils'
import { MDXNode } from '../../data/mdx'

interface AppInfoProps {
  content: MDXNode['frontmatter']['app_info']
}

const AppInfo = ({ content }: AppInfoProps): JSX.Element => {
  return (
    <div className="section__content app-info">
      <ul className="app-info__list">
        {Object.entries(content).map(([label, value]) => {
          if (!value) return ''

          const labelWithSpaces = label.split(`_`).join(` `)
          const capitalizedLabel =
            labelWithSpaces[0].toUpperCase() + labelWithSpaces.slice(1)

          return (
            <li key={generateKey(label, value)} className="app-info__item">
              {capitalizedLabel}:{` `}
              <span className="app-info__item-value">
                {label === `website` ? <Link to={value}>{value}</Link> : value}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AppInfo
