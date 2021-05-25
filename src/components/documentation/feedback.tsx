import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Link from '../link'

export interface FeedbackProps {
  options: Array<{
    title: string
    url: string
  }>
}

const Feedback = ({ options }: FeedbackProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="feedback">
      <section className="feedback__section">
        <div
          className={`
            feedback__title-wrapper
            ${isExpanded ? 'feedback__title-wrapper_highlighted' : ''}
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <button className="feedback__title-icon">
            <FontAwesomeIcon
              icon={faAngleDown}
              flip={isExpanded ? `vertical` : undefined}
              fixedWidth
            />
          </button>
          <p className="feedback__title">
            {t(`misc.feedback.documentation.title`)}
          </p>
        </div>
      </section>

      {isExpanded && (
        <section className="feedback__section feedback__instructions">
          <p className="feedback__paragraph">
            {t(`misc.feedback.documentation.description`)}
          </p>
          <ul>
            {options.map((option) => (
              <li key={option.url} className="feedback__instructions-list-item">
                <Link className="feedback__link" to={option.url}>
                  {option.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}

export default Feedback
