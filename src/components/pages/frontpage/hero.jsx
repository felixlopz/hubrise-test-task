import React from 'react'
import PropTypes from 'prop-types'

import { markdownToHtml } from '../../utils'

export const Hero = ({ title, description, button_label, button_url }) => {
  return (
    <div className="frontpage-hero">
      <div className="frontpage-hero__container">
        <div className="frontpage-hero__banner">
          <div className="frontpage-hero__banner-in">
            <h3 className="frontpage-hero__title">{title}</h3>
            <div
              className="frontpage-hero__description"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description)
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
