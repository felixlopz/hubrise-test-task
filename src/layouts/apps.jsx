import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Modal from '../components/modal'
import SuggestAppForm from '../components/forms/suggest_app'
import { Hero, Developers, AppSection } from '../components/pages/apps'
import { generateKey } from '../components/utils'
import { useLayoutContext } from '../context/layout'
import SEO from '../components/seo'

const AppsPage = ({ data, pageContext }) => {
  const { file, logos } = data
  const { meta, content } = file.childYaml.parsedContent

  const { forms } = useLayoutContext()
  const { t } = useTranslation()

  return (
    <>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />
      <Hero content={content.hero} />
      {content.sections.map((props, idx) => (
        <AppSection
          key={generateKey(props.title, idx)}
          logos={logos.nodes}
          suggestAppContent={
            props.has_suggest_app && content.additional_sections.suggest_app
          }
          {...props}
        />
      ))}
      <Developers content={content.developers} />
      {forms.suggestApp.isVisible && (
        <Modal
          title={t(`forms.suggest_app.modal.title`)}
          description={t(`forms.suggest_app.modal.description`)}
          onClose={forms.suggestApp.toggle}
        >
          <SuggestAppForm />
        </Modal>
      )}
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

export default AppsPage
