import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link'
import { generateKey } from '../../utils'

export const Offer = ({ pricing, features, link }) => {
  return (
    <div
      className="section section_full-width section_vw section_padding">
      <div className="section__in section__in_green section__in_padding">
        <h3 className="section__title section__title_no-border">
          {pricing.chunk_1}
          <span className="section__title-span">{pricing.chunk_2}</span>
        </h3>
        <ul className="pricing__offer-list">
          {features.map((feature, idx) => (
            <li key={generateKey(feature, idx)} className="pricing__offer-item">
              {feature}
            </li>
          ))}
        </ul>
        <Link className="pricing__button"
          to={link.to}
          newTab={false}
        >
          {link.text}
        </Link>
      </div>
    </div>
  )
}

Offer.propTypes = {
  pricing: PropTypes.shape({
    chunk_1: PropTypes.string.isRequired,
    chunk_2: PropTypes.string.isRequired
  }).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }).isRequired
}
