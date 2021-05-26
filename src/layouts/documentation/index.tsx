import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { DocumentationContext } from '../../data/context'
import { Image, ImageSharpFluid } from '../../data/image'
import { MDXNode } from '../../data/mdx'
import { getBreadcrumbs, getFeedbackOptions } from './helpers'
import {
  SectionNavigation,
  Gallery,
  AppInfo,
  Breadcrumbs,
  Feedback
} from '../../components/documentation'
import SEO from '../../components/shared/Seo'
import MDXProvider from '../../components/shared/MdxProvider'

interface DocumentationProps {
  data: DocumentationData
  path: string
  pageContext: DocumentationContext
}

interface DocumentationData {
  currentAndSiblingPages: {
    nodes: Array<MDXNode>
  }
  images: {
    nodes: Array<Image<ImageSharpFluid>>
  }
}

export const graphqlQuery = graphql`
  query documentationData(
    $currentAndSiblingPagesFilter: MdxFilterInput!
    $imagesPath: String!
  ) {
    currentAndSiblingPages: allMdx(filter: $currentAndSiblingPagesFilter) {
      nodes {
        id
        frontmatter {
          meta {
            title
            description
          }
          title
          position
          gallery
          path_override
          app_info {
            category
            availability
            price_range
            website
            contact
          }
        }
        fields {
          slug
          localeSlugMap {
            en
            fr
          }
        }
        headings {
          value
          depth
        }
        body
      }
    }
    images: allFile(
      filter: {
        absolutePath: { glob: $imagesPath }
        extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/" }
      }
    ) {
      nodes {
        ...ImageFragmentSharpFluid
      }
    }
  }
`

const Documentation = ({
  data,
  path,
  pageContext
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  const { currentAndSiblingPages, images } = data
  const mdxNodes = currentAndSiblingPages.nodes
  const currentMdxNode = mdxNodes.find((node) => node.id === pageContext.id)
  if (!currentMdxNode) throw 'MDX node not found'

  const { frontmatter, body } = currentMdxNode
  const { meta, title, gallery, app_info } = frontmatter

  const breadcrumbs = getBreadcrumbs(pageContext, currentMdxNode)
  const feedbackOptions = getFeedbackOptions(t, pageContext)

  const chapterTitle = pageContext.config.name || ''

  const galleryImages: Array<Image<ImageSharpFluid>> = []
  for (let imageBase of gallery || []) {
    const image = images.nodes.find((node) => node.base === imageBase)
    if (image) galleryImages.unshift(image)
  }

  return (
    <MDXProvider>
      <SEO
        lang={pageContext.lang}
        title={meta?.title}
        description={meta?.description}
      />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <section className="section">
        <div
          className={`
          section__in
          section__in_padding
          section__in_reverse
          section__in_developers
        `}
        >
          <div className="section__content">
            <div className="documentation">
              <h1>{title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>

          <SectionNavigation
            logo={images.nodes.find(
              ({ base }) => base === pageContext.config.logo
            )}
            currentPath={path}
            title={chapterTitle}
            mdxNodes={mdxNodes}
          />

          {galleryImages && (
            <Gallery title={chapterTitle} images={galleryImages} />
          )}

          {app_info && <AppInfo content={app_info} />}
        </div>
      </section>

      <Feedback options={feedbackOptions} />
    </MDXProvider>
  )
}

export default Documentation
