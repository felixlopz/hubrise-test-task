import React from 'react'
import PropTypes from 'prop-types'

import { markdownToHtml } from '../../utils'

export const Hero = ({ title, description }) => {
  return (
    <div className="index-hero">
      <div className="index-hero__container">
        <div className="index-hero__banner">
          <div className="index-hero__banner-in">
            <h3 className="index-hero__title">{title}</h3>
            <div
              className="index-hero__description"
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
