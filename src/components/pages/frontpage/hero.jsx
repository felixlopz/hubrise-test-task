import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../link'

import { markdownToHtml } from '../../utils'

export const Hero = ({ title, description, button_label, button_url }) => {
  return (
    <div className="frontpage-hero">
      <div className="frontpage-hero__container">
        <div className="frontpage-hero__banner-wrapper">
          <div className="frontpage-hero__banner">
            <h1 className="frontpage-hero__title">{title}</h1>
            <div
              className="frontpage-hero__description"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description)
              }}
            ></div>
            <Link className="frontpage-hero__button" to={button_url}>
              {button_label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button_label: PropTypes.string.isRequired,
  button_url: PropTypes.string.isRequired
}
