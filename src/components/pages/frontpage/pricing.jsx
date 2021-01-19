import React from 'react'
import { markdownToHtml } from '../../utils'
import Link from '../../link'

export const Pricing = ({ title, description, button_label, button_url, link_label, link_url }) => {
  return (
    <section className="frontpage-pricing">
      <div className="frontpage-pricing__inside">
        <div className="frontpage-pricing__text">
          <h3 className="frontpage-pricing__title">{title}</h3>

          <div
            className="frontpage-pricing__description"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
          />

          <div className="frontpage-pricing__actions">
            {button_label && button_url && (
              <Link to={button_url} className="frontpage-pricing__button">{button_label}</Link>
            )}

            {link_label && link_url && (
              <Link to={link_url} className="frontpage-pricing__link">{link_label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
