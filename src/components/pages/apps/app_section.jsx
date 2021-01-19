import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import GatsbyImage from 'gatsby-image'
import Link from '../../link'
import { generateKey } from '../../utils'

export const AppSection = ({
  title,
  showTitle,
  apps,
  logos,
  suggestAppContent
}) => {
  const { t } = useTranslation()

  return (
    <section className="section section__center">
      {showTitle && <h3 className="section__title">{title}</h3>}

      <div className="apps">
        {apps.map((app, idx) => {
          const logo = logos.find(({ base }) => base === app.logo)
          if (!logo) throw new Error(`${title} does not have a logo`)

          return (
            <Link
              key={generateKey(title, idx)}
              to={app.documentation || app.website}
              className="apps__box"
            >
              <GatsbyImage
                className="apps__logo"
                alt={title}
                imgStyle={{ objectFit: 'scale-down' }}
                {...logo.childImageSharp}
              />
              <div className="apps__documentation">
                {app.documentation
                  ? t('apps.view_documentation')
                  : t('apps.visit_website')}
              </div>
              <div className="apps__description">{app.description}</div>
              {app.additional_info && (
                <div className="apps__additional-info">
                  {app.additional_info}
                </div>
              )}
            </Link>
          )
        })}
        {suggestAppContent && <SuggestApp {...suggestAppContent} />}
      </div>
    </section>
  )
}

AppSection.propTypes = {
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additional_info: PropTypes.string
    })
  ).isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      relativeDirectory: PropTypes.string.isRequired,
      childImageSharp: PropTypes.object
    })
  ).isRequired,
  suggestAppContent: PropTypes.shape({
    description: PropTypes.string.isRequired
  })
}

const SuggestApp = ({ description }) => {
  return (
    <div className="apps__box apps__box_suggest">
      {description}
      <div className="apps__suggest-email">
        <Link to="mailto:contact@hubrise.com">contact@hubrise.com</Link>
      </div>
    </div>
  )
}

SuggestApp.propTypes = {
  description: PropTypes.string.isRequired
}
