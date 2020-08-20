import React from 'react'
import PropTypes from 'prop-types'

import { NonStretchedImage } from '../../non_stretched_image'
import { generateKey, markdownToHtml } from '../../utils'

import remark from 'remark'
import remarkHtml from 'remark-html'

export const Main = ({
  title,
  descriptionLarge,
  description,
  features,
  style,
  diagramImage
}) => {
  return (
    <section
      className={['section']
        .concat(
          style === 'green' ? ['section_full-width', 'section_padding'] : []
        )
        .join(' ')}
    >
      <div
        className={['section__in', 'section__in_padding']
          .concat(style === 'green' ? ['section__in_green'] : [])
          .join(' ')}
      >
        <h3 className="section__title">{title}</h3>

        {descriptionLarge && (
          <div
            className="section__description section__description_large"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(descriptionLarge)
            }}
          />
        )}

        {description && (
          <div
            className="section__description"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
          />
        )}

        {features && (
          <ul className="index-about">
            {features.map((feature, idx) => (
              <li key={generateKey(feature, idx)} className="index-about__item">
                <span className="index-about__span">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {diagramImage && (
          <div className="section__diagram">
            <NonStretchedImage
              className="section__diagram-image"
              alt={diagramImage.name}
              {...diagramImage.childImageSharp}
            />
          </div>
        )}
      </div>
    </section>
  )
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  largeDescription: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  diagramImage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    childImageSharp: PropTypes.object.isRequired
  }).isRequired
}
