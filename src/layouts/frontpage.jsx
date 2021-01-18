import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Main, Apps } from '../components/pages/frontpage'
import SEO from '../components/seo'

const FrontPage = ({ data, pageContext }) => {
  const { file, apps, appsHover, images } = data
  const { meta, hero, content, body } = file.childYaml.parsedContent

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta.title}
        description={meta.description}
      />

      <Hero {...hero} />

      <Apps
        title={content.apps.title}
        description={content.apps.description}
        categories={content.apps.categories}
        apps={apps}
        appsHover={appsHover}
      />

      {body.map((block) => {
        switch (block.block_type) {
          case 'main':
          case 'main-green':
            return (
              <Main
                title={block.title}
                descriptionLarge={block.description_large}
                description={block.description}
                style={block.block_type === 'main_green' ? 'green' : null}
                diagramImage={images.nodes.find(
                  ({ base }) => base === block.diagram
                )}
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
    apps: file(
      absolutePath: { glob: "**/content/base/images/frontpage/apps.png" }
    ) {
      childImageSharp {
        fixed(width: 501, height: 395) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    appsHover: file(
      absolutePath: { glob: "**/content/base/images/frontpage/apps-hover.png" }
    ) {
      childImageSharp {
        fixed(width: 501, height: 395) {
          ...GatsbyImageSharpFixed
        }
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
  }
`

export default FrontPage
