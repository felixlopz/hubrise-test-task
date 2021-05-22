import React from 'react'
import { graphql } from 'gatsby'

import { generateKey } from '../components/utils'
import SEO from '../components/seo'
import { AppsContext, IApps, AppsQueryGQL } from '../data/apps'
import { App, Developer, Hero, Nav } from '../components/pages/apps'

interface AppsProps {
  data: AppsQueryGQL
  pageContext: AppsContext
}

const Apps = ({ data, pageContext }: AppsProps): JSX.Element => {
  const { file, logos } = data
  const { meta, content } = file.childYaml.parsedContent as IApps
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

export const appsPageQuery = graphql`
  query getAppsPageContent($id: String!) {
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
        ...Image
      }
    }
  }
`

export default Apps
