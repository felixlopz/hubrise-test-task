import React from 'react'
import PropTypes from 'prop-types'

import { NonStretchedImage } from '../../non_stretched_image'
import { generateKey } from '../../utils'

import remark from 'remark'
import remarkHtml from 'remark-html'

export const Main = ({ title, description, features, diagramImage }) => {
  const htmlDescription = remark()
    .use(remarkHtml)
    .processSync(description.replace(/\n/g, '\n\n'))
    .toString()

  return (
    <section id="more" className="section">
      <div className="section__in section__in_padding">
        <h3 className="section__title">{title}</h3>
        <div
          className="section__description"
          dangerouslySetInnerHTML={{ __html: htmlDescription }}
        />
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
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  diagramImage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    childImageSharp: PropTypes.object.isRequired
  }).isRequired
}
