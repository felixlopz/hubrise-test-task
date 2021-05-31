import * as React from 'react'
import GatsbyImage from 'gatsby-image'

import { markdownToHtml } from '@components/utils'
import { Image, ImageSharpFixed } from '../../../data/image'

interface DevelopersProps {
  title: string
  description: string
  team_members: Array<{
    // TODO: create proper type in src/data
    name: string
    filename: string
  }>
  allPictureFiles: {
    nodes: Array<Image<ImageSharpFixed>>
  }
}

const Developers = ({
  title,
  description,
  team_members,
  allPictureFiles
}: DevelopersProps): JSX.Element => {
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
            {team_members.map(({ name, filename }, idx) => {
              const picture = allPictureFiles.nodes.find(
                ({ base }) => base === filename
              )
              if (!picture)
                throw new Error(`Team member ${name} does not have a picture`)

              return (
                <li className="frontpage-developers__team-member" key={idx}>
                  <GatsbyImage
                    className="frontpage-developers__member-picture"
                    {...picture.childImageSharp}
                  />
                  <div className="frontpage-developers__member-name">
                    {name}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Developers
