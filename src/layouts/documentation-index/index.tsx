import * as React from 'react'
import { graphql } from 'gatsby'

import { MDXNode } from '../../data/mdx'
import { generateKey } from '@components/utils'
import SEO from '@components/Seo'
import Hero from './components/Hero'
import Thumb from './components/Thumb'
import { DocumentationIndexContext } from './interface'

interface DocumentationIndexProps {
  data: DocumentationIndexData
  pageContext: DocumentationIndexContext
}

interface DocumentationIndexData {
  mdx: MDXNode
}

export const graphqlQuery = graphql`
  query developersData($mdXNodeId: String!) {
    mdx(id: { eq: $mdXNodeId }) {
      frontmatter {
        meta {
          title
          description
        }
        content {
          hero {
            title
            description {
              paragraph_1
              paragraph_2 {
                button
                text
              }
            }
          }
          thumbs {
            title
            description
            to
            icon
          }
        }
      }
    }
  }
`

const DocumentationIndex = ({
  data,
  pageContext
}: DocumentationIndexProps): JSX.Element => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO
        localeCode={pageContext.localeCode}
        title={meta?.title}
        description={meta?.description}
      />

      <div className="index">
        <Hero {...content.hero} />

        <section className="section">
          <div
            className={`
            section__in
            section__in_padding
            section__in_reverse
          `}
          >
            <ul className="developers-thumbs">
              {content.thumbs.map((thumb, idx) => (
                <Thumb key={generateKey(thumb.title, idx)} {...thumb} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default DocumentationIndex
