import React from 'react'
import { markdownToHtml } from '../../utils'

export const MissionAndScalability = ({ mission, scalability }) => {
  return (
    <section className="frontpage-mission-scalability">
      <div className="frontpage-mission-scalability__first">
        <h3 className="frontpage-mission-scalability__title">{mission.title}</h3>
        <div
          className="frontpage-mission-scalability__description"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(mission.description) }}
        />
      </div>

      <div className="frontpage-mission-scalability__second">
        <h3 className="frontpage-mission-scalability__title">{scalability.title}</h3>
        <div
          className="frontpage-mission-scalability__description"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(scalability.description) }}
        />
      </div>
    </section>
  )
}
