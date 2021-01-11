import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Main } from '../components/pages/frontpage'
import SEO from '../components/seo'

const FrontPage = ({ data, pageContext }) => {
  const { file, images, videos } = data
  const { meta, hero, body } = file.childYaml.parsedContent

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta.title}
        description={meta.description}
      />

      <Hero {...hero} />

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
  }
`

export default FrontPage
