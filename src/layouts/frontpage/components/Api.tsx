import * as React from 'react'

import { Image, ImageSharpFixed } from '../../../data/image'
import { markdownToHtml } from '@components/utils'

interface ApiProps {
  title: string
  description: string
  image: Image<ImageSharpFixed>
}

const Api = ({ title, description, image }: ApiProps): JSX.Element => {
  return (
    <section className="frontpage__row frontpage__row_oneside">
      <div className="frontpage__row_oneside__in frontpage__row_oneside__in_left">
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

export default Api
