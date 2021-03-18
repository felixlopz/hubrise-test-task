import React from 'react'
import { graphql } from 'gatsby'

import { Hero, Nav, AppSection, Developers } from '../components/pages/apps'
import { generateKey } from '../components/utils'
import SEO from '../components/seo'

const Apps = ({ data, pageContext }) => {
  const { file, logos } = data
  const { meta, content } = file.childYaml.parsedContent
  const { lang, category } = pageContext
  const categories = content.categories.map(({ title }) => title)

  return (
    <>
      <SEO lang={lang} title={meta?.title} description={meta?.description} />

      <Hero content={content.hero} />

      <Nav
        categories={categories}
        currentCategory={category}
        allAppsLabel={content.all_apps}
      />

      {content.categories.map((props, idx) => {
        if (category && category != props.title) return
        return (
          <AppSection
            key={generateKey(props.title, idx)}
            logos={logos.nodes}
            suggestAppContent={
              props.has_suggest_app && content.additional_sections.suggest_app
            }
            showTitle={category === undefined}
            {...props}
          />
        )
      })}
      <Developers content={content.developers} />
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
