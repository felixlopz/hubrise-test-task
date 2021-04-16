import React from 'react'
import { markdownToHtml } from '../../utils'
import Link from '../../link'

export const Apps = ({ title, description, categories, apps, appsHover }) => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_right">
        <div className="frontpage-apps">
          <div className="frontpage-apps__text">
            <h3 className="frontpage-apps__title">{title}</h3>
            <div
              className="frontpage-apps__description"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
            />
            <ul className="frontpage-apps__categories">
              {categories.map((category, idx) => (
                <li className="frontpage-apps__categories-item" key={idx}>{category}</li>
              ))}
            </ul>
          </div>

          <Link to="/apps" className="frontpage-apps__image">
            <img
              className="frontpage-apps__image-normal"
              src={apps.childImageSharp.fixed.src}
            />
            <img
              className="frontpage-apps__image-hover"
              src={appsHover.childImageSharp.fixed.src}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
