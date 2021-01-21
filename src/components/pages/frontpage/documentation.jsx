import React from 'react'
import { markdownToHtml } from '../../utils'

export const Documentation = ({ title, description, image }) => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_right">
        <div className="frontpage-documentation">
          <div className="frontpage-documentation__text">
            <h3 className="frontpage-documentation__title">{title}</h3>
            <div
              className="frontpage-documentation__description"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
            />
          </div>

          <div className="frontpage-documentation__image">
            <img src={image.childImageSharp.fixed.src} />
          </div>
        </div>
      </div>
    </section>
  )
}
