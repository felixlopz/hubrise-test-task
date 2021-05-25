import * as React from 'react'
import { graphql } from 'gatsby'

import { IApps } from '../../data/apps'
import { AppsContext } from '../../data/context'
import { Image, ImageSharpFluid } from '../../data/image'
import { generateKey } from '../../components/utils'
import SEO from '../../components/Seo'
import { App, Developer, Hero, Nav } from '../../components/apps'

interface AppsProps {
  data: AppsData
  pageContext: AppsContext
}

interface AppsData {
  file: {
    childYaml: {
      parsedContent: IApps
    }
  }
  logos: {
    nodes: Array<Image<ImageSharpFluid>>
  }
}

export const graphqlQuery = graphql`
  query appsData($id: String!) {
    file(id: { eq: $id }) {
      childYaml {
        parsedContent
      }
    }
    logos: allFile(
      filter: {
        absolutePath: { glob: "**/content/base/images/app-logos/*" }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        ...ImageFragmentSharpFluid
      }
    }
  }
`

const Apps = ({ data, pageContext }: AppsProps): JSX.Element => {
  const { file, logos } = data
  const { meta, content } = file.childYaml.parsedContent
  const { lang, category } = pageContext
  const categories = content.categories.map(({ title }) => title)

  return (
    <>
      <SEO lang={lang} title={meta?.title} description={meta?.description} />

      <Hero hero={content.hero} />

      <Nav
        categories={categories}
        currentCategory={category}
        allAppsLabel={content.all_apps}
      />

      {content.categories.map(({ title, apps, has_suggest_app }, idx) => {
        if (!category || category === title) {
          return (
            <App
              key={generateKey(title, idx)}
              title={title}
              showTitle={category === undefined}
              apps={apps}
              logos={logos.nodes}
              additionalSections={content.additional_sections}
              hasSuggestApp={has_suggest_app}
            />
          )
        }
      })}
      <Developer developers={content.developers} />
    </>
  )
}

export default Apps
