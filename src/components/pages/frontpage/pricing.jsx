import React from 'react'
import { markdownToHtml } from '../../utils'
import Link from '../../link'

export const Pricing = ({ title, description, button_label, button_url, link_label, link_url }) => {
  return (
    <section className="frontpage-full frontpage-full_green">
      <div className="frontpage-full__inside">
        <div className="frontpage-full__text">
          <h3 className="frontpage-full__title">{title}</h3>

          <div
            className="frontpage-full__description"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
          />

          <div className="frontpage-full__actions">
            {button_label && button_url && (
              <Link to={button_url} className="frontpage-full__button">{button_label}</Link>
            )}

            {link_label && link_url && (
              <Link to={link_url} className="frontpage-full__link">{link_label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
