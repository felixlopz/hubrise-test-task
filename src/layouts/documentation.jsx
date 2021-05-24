import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'react-i18next'

import {
  SectionNavigation,
  Gallery,
  AppInfo,
  Breadcrumbs,
  Feedback
} from '../components/documentation'
import SEO from '../components/seo'
import MDXProvider from './mdx_provider'

const DocumentationPage = ({ data, path, pageContext }) => {
  const { t } = useTranslation()
  const { name: chapterTitle, logo: logoBase } = pageContext.config
  const { images } = data

  const pageNodes = data.currentAndSiblingPages.nodes
  const currentPage = pageNodes.find((node) => node.id === pageContext.id)

  const { frontmatter, body } = currentPage
  const { meta, title, gallery, app_info } = frontmatter

  function getBreadcrumbs() {
    const breadcrumbs = pageContext.breadcrumbs.map(
      (breadcrumb, index, array) => {
        let path = array
          .slice(0, index + 1)
          .map((breadcrumb) => breadcrumb.value)
          .filter((part) => part !== '/')
          .join('/')

        path = path ? `/${path}/` : '/'
        return { path, label: breadcrumb.label }
      }
    )
    return breadcrumbs
      .concat({ path: null, label: currentPage.frontmatter.title })
      .map((breadcrumb, index) => ({ ...breadcrumb, id: index + 1 }))
  }

  const feedbackOptions = [
    {
      title: t('misc.feedback.documentation.options.send_email'),
      url: 'mailto:support@hubrise.com'
    },
    {
      title: t('misc.feedback.documentation.options.edit_page'),
      url: `https://github.com/HubRise/website/edit/master${pageContext.relativePath}`
    }
  ]

  const breadcrumbs = getBreadcrumbs()

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
            logo={images.nodes.find(({ base }) => base === logoBase)}
            currentPath={path}
            title={chapterTitle}
            pages={pageNodes}
          />
          {gallery && (
            <Gallery
              title={chapterTitle}
              images={gallery.reduce((result, base) => {
                const match = images.nodes.find((node) => node.base === base)
                return result.concat(match || [])
              }, [])}
            />
          )}
          {app_info && <AppInfo content={app_info} />}
        </div>
      </section>
      <Feedback options={feedbackOptions} />
    </MDXProvider>
  )
}

export const documentationPageQuery = graphql`
query getDocumentationPageContent($currentAndSiblingPagesFilter: MdxFilterInput!, $imagesPath: String!) {
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
  images: allFile(filter: {absolutePath: {glob: $imagesPath}, extension: {regex: "/(jpg)|(png)|(jpeg)|(webp)|(tif)|(tiff)/"}}) {
    nodes {
      ...Image
    }
  }
}
`

export default DocumentationPage
