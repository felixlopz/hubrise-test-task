import React from 'react'
import { markdownToHtml } from '../../utils'

export const Api = ({ title, description, image }) => {
  return (
    <section className="frontpage__row">
      <div className="frontpage__inside frontpage__inside_left">
        <div className="frontpage-api">
          <div className="frontpage-api__text">
            <h3 className="frontpage-api__title">{title}</h3>
            <div
              className="frontpage-api__description"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
            />
          </div>

          <div className="frontpage-api__image">
            <img src={image.childImageSharp.fixed.src} />
          </div>
        </div>
      </div>
    </section>
  )
}
