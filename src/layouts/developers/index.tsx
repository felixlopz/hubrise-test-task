import * as React from 'react'
import { graphql } from 'gatsby'

import { MDXNode } from '../../data/mdx'
import { BaseContext } from '../../data/context'
import { Hero, Thumb } from '../../components/developers'
import { generateKey } from '../../components/utils'
import SEO from '../../components/Seo'

interface DevelopersProps {
  data: DevelopersData
  pageContext: BaseContext
}

interface DevelopersData {
  mdx: MDXNode
}

export const graphqlQuery = graphql`
  query developersData($id: String!) {
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

const DevelopersPage = ({
  data,
  pageContext
}: DevelopersProps): JSX.Element => {
  const { meta, content } = data.mdx.frontmatter

  return (
    <>
      <SEO
        lang={pageContext.lang}
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

export default DevelopersPage
