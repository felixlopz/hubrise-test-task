import React from 'react'
import { markdownToHtml } from '../../utils'
import GatsbyImage from 'gatsby-image'

export const Developers = ({ title, description, team_members, teamPictures }) => {
  return (
    <section className="frontpage-developers">
      <div className="frontpage-developers__inside">
        <div className="frontpage-developers__text">
          <h3 className="frontpage-developers__title">{title}</h3>
          <div
            className="frontpage-developers__description"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
          />

          <ul className="frontpage-developers__team">
            {team_members.map(({ name, filename }) => {
              const picture = teamPictures.nodes.find(({ base }) => base === filename)
              if (!picture) throw new Error(`Team member ${name} does not have a picture`)

              return <li className="frontpage-developers__team-member">
                <GatsbyImage className="frontpage-developers__member-picture" {...picture.childImageSharp} />
                <div className="frontpage-developers__member-name">{name}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
