import * as React from 'react'
import { graphql } from 'gatsby'

import { BaseContext } from '../../data/context'
import { Image, ImageSharpFixed } from '../../data/image'
import {
  Hero,
  Apps,
  Api,
  Documentation,
  Pricing,
  Developers,
  Join
} from './components'
import SEO from '../../components/Seo'

interface FrontpageProps {
  data: FrontpageData
  pageContext: BaseContext
}

interface FrontpageData {
  file: {
    childYaml: {
      parsedContent: any // #TODO
    }
  }
  apps: Image<ImageSharpFixed>
  appsHover: Image<ImageSharpFixed>
  apiImage: Image<ImageSharpFixed>
  documentationImage: Image<ImageSharpFixed>
  allPictureFiles: Array<Image<ImageSharpFixed>>
}

export const graphqlQuery = graphql`
  query frontpageData($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
    apps: file(absolutePath: { glob: "**/content/images/frontpage/apps.png" }) {
      childImageSharp {
        fixed(width: 501, height: 395) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    appsHover: file(
      absolutePath: { glob: "**/content/images/frontpage/apps-hover.png" }
    ) {
      childImageSharp {
        fixed(width: 501, height: 395) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    apiImage: file(
      absolutePath: { glob: "**/content/images/frontpage/api.png" }
    ) {
      childImageSharp {
        fixed(width: 712, height: 485) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    documentationImage: file(
      absolutePath: { glob: "**/content/images/frontpage/documentation.png" }
    ) {
      childImageSharp {
        fixed(width: 558, height: 347) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allPictureFiles: allFile(
      filter: {
        absolutePath: { glob: "**/content/images/frontpage/team/*" }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        name
        base
        publicURL
        relativeDirectory
        childImageSharp {
          fixed(width: 124, height: 124) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const Frontpage = ({ data, pageContext }: FrontpageProps): JSX.Element => {
  const {
    file,
    apps,
    appsHover,
    apiImage,
    documentationImage,
    allPictureFiles
  } = data
  const { meta, hero, content } = file.childYaml.parsedContent

  return (
    <div className="frontpage">
      <SEO
        localeCode={pageContext.localeCode}
        title={meta.title}
        description={meta.description}
      />

      <Hero {...hero} />

      <Apps {...content.apps} apps={apps} appsHover={appsHover} />

      <Api {...content.api} image={apiImage} />

      <Documentation {...content.documentation} image={documentationImage} />

      <Pricing {...content.pricing} />

      <Developers {...content.developers} allPictureFiles={allPictureFiles} />

      {/*<MissionAndScalability {...content.mission_and_scalability} />*/}

      <Join {...content.join} />
    </div>
  )
}

export default Frontpage
