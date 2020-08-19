import React from 'react'
import { graphql } from 'gatsby'

import {
  Hero,
  Main,
  Demonstration,
  Faq,
  CompatibleApps
} from '../components/pages/frontpage'
import SEO from '../components/seo'

const FrontPage = ({ data, pageContext }) => {
  const { file, images, videos } = data
  const { meta, header, body } = file.childYaml.parsedContent

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta.title}
        description={meta.description}
      />

      <Hero signupFormContent={header.signup_form} {...header.hero} />

      {body.map((block) => {
        switch (block.block_type) {
          case 'main':
          case 'main_green':
            return (
              <Main
                title={block.title}
                descriptionLarge={block.description_large}
                description={block.description}
                features={block.features}
                style={block.block_type === 'main_green' ? 'green' : null}
                diagramImage={images.nodes.find(
                  ({ base }) => base === block.diagram
                )}
              />
            )
            break

          case 'demonstration':
            return (
              <Demonstration
                videoFile={videos.nodes.find(
                  ({ base }) => base === block.video
                )}
                {...block}
              />
            )
            break

          case 'faq':
            return <Faq {...block} />
            break

          case 'compatible_apps':
            return (
              <CompatibleApps
                carouselImages={block.carousel.reduce((result, item) => {
                  const match = images.nodes.find(
                    ({ base }) => item.file === base
                  )
                  return result.concat(match ? { ...item, ...match } : [])
                }, [])}
                {...block}
              />
            )
            break
        }
      })}
    </>
  )
}

export const frontPageQuery = graphql`
  query getFrontPageContent($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
    images: allFile(
      filter: {
        absolutePath: { glob: "**/content/base/images/*" }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        ...Image
      }
    }
    videos: allFile(
      filter: {
        absolutePath: { glob: "**/content/base/images/*" }
        extension: { regex: "/(mp4)|(webm)/" }
      }
    ) {
      nodes {
        base
        publicURL
      }
    }
  }
`

export default FrontPage
