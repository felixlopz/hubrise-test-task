import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import Modal from '../components/modal'
import SuggestAppForm from '../components/forms/suggest_app'
import { Hero, Developers, AppSection } from '../components/pages/apps'
import { generateKey, replaceBackslash } from '../components/utils'
import { useLayoutContext } from '../context/layout'
import SEO from '../components/seo'

const AppsPage = ({ data, pageContext }) => {
  const { meta, content } = data.mdx.frontmatter
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
          logos={data.images.nodes.filter(
            ({ relativeDirectory }) =>
              replaceBackslash(relativeDirectory) === `images/app-logos`
          )}
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
  query getAppsPageContent($id: String!, $imagesPath: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        meta {
          title
          description
        }
        content {
          hero {
            title
            description {
              paragraph_1_text
              paragraph_1_link_text
              paragraph_2_text
              paragraph_2_link_text
              paragraph_2_link_to
            }
          }
          sections {
            title
            has_suggest_app
            apps {
              to
              logo
              title
              description
              additional_info
            }
          }
          additional_sections {
            suggest_app {
              title
              description
              button
            }
          }
          developers {
            title
            description {
              paragraph_1
              paragraph_2 {
                chunk_1
                chunk_2
              }
            }
          }
        }
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
  }
`

export default AppsPage
