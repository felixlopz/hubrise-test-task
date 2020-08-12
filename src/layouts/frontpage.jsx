import React from 'react'
import { graphql } from 'gatsby'

import {
  Hero,
  Main,
  Demonstration,
  Faq,
  CompatibleApps,
  Philosophy
} from '../components/pages/frontpage'
import SEO from '../components/seo'

const FrontPage = ({ data, pageContext }) => {
  const { file, images, videos } = data
  const yaml = file.childYaml.parsedContent
  const content = yaml.content
  const meta = yaml.meta

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta.title}
        description={meta.description}
      />
      <Hero signupFormContent={content.signup_form} {...content.hero} />
      {content.mains.map((main) => (
        <Main
          {...main}
          diagramImage={images.nodes.find(({ base }) => base === main.diagram)}
        />
      ))}
      {content.demonstration && (
        <Demonstration
          videoFile={videos.nodes.find(
            ({ base }) => base === content.demonstration.video
          )}
          {...content.demonstration}
        />
      )}
      {content.faq && <Faq {...content.faq} />}
      {content.compatible_apps && (
        <CompatibleApps
          carouselImages={content.compatible_apps.carousel.reduce(
            (result, item) => {
              const match = images.nodes.find(({ base }) => item.file === base)
              return result.concat(match ? { ...item, ...match } : [])
            },
            []
          )}
          {...content.compatible_apps}
        />
      )}
      {content.philosophy && <Philosophy {...content.philosophy} />}
    </>
  )
}

export const frontPageQuery = graphql`
  query getFrontPageContent($yamlPath: String!, $imagesPath: String!) {
    file(absolutePath: { glob: $yamlPath }) {
      childYaml {
        parsedContent
      }
    }
    images: allFile(
      filter: {
        absolutePath: { glob: $imagesPath }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        ...Image
      }
    }
    videos: allFile(
      filter: {
        absolutePath: { glob: $imagesPath }
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
