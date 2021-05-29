import * as React from 'react'
import { graphql } from 'gatsby'

import { AppsContext } from '../../data/context'
import { Image, ImageSharpFluid } from '../../data/image'
import { generateKey } from '../../components/utils'
import SEO from '../../components/shared/Seo'
import { App, Developer, Hero, Nav } from '../../components/apps'

interface AppsProps {
  data: AppsData
  path: string
  pageContext: AppsContext
}

interface AppsData {
  logos: {
    nodes: Array<Image<ImageSharpFluid>>
  }
}

export const graphqlQuery = graphql`
  query appsData {
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

const Apps = ({ data, pageContext, path }: AppsProps): JSX.Element => {
  const { logos } = data
  const { localeCode, apps, categoryTitle } = pageContext
  const { meta, content, path: allAppsPath } = apps

  return (
    <>
      <SEO
        localeCode={localeCode}
        title={meta?.title}
        description={meta?.description}
      />

      <Hero hero={content.hero} />

      <Nav
        categories={content.categories}
        currentPath={path}
        allAppsPath={allAppsPath}
        allAppsLabel={content.all_apps}
      />

      {content.categories.map(({ title, apps, has_suggest_app }, idx) => {
        if (!categoryTitle || categoryTitle === title) {
          return (
            <App
              key={generateKey(title, idx)}
              title={title}
              showTitle={!categoryTitle}
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
