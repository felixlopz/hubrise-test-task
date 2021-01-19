import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Main, Apps, Api, Documentation, Pricing } from '../components/pages/frontpage'
import SEO from '../components/seo'

const FrontPage = ({ data, pageContext }) => {
  const { file, apps, appsHover, apiImage, documentationImage, images } = data
  const { meta, hero, content, body } = file.childYaml.parsedContent

  return (
    <div class="frontpage">
      <SEO
        lang={pageContext.lang}
        title={meta.title}
        description={meta.description}
      />

      <Hero {...hero} />

      <Apps {...content.apps} apps={apps} appsHover={appsHover}/>

      <Api {...content.api} image={apiImage}/>

      <Documentation {...content.documentation} image={documentationImage}/>

      <Pricing {...content.pricing}/>

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
    </div>
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
    apiImage: file(
      absolutePath: { glob: "**/content/base/images/frontpage/api.png" }
    ) {
      childImageSharp {
        fixed(width: 712, height: 485) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    documentationImage: file(
      absolutePath: { glob: "**/content/base/images/frontpage/documentation.png" }
    ) {
      childImageSharp {
        fixed(width: 558, height: 347) {
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
