import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useTranslation } from 'react-i18next'

import { DocumentationContext } from '../../data/context'
import { ImageSharpFluid } from '../../data/image'
import { getFeedbackOptions } from './helpers'
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
  path: string
  pageContext: DocumentationContext
}

const Documentation = ({
  path,
  pageContext
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    breadcrumbs,
    folderTitle,
    folderPages,
    imageSharpMap,
    localeCode,
    logoImageName,
    mdxNode
  } = pageContext

  const currentMdxNode = mdxNode

  const { frontmatter, body } = currentMdxNode
  const { meta, title, gallery, app_info } = frontmatter

  const feedbackOptions = getFeedbackOptions(t, pageContext)

  const logoImage =
    imageSharpMap && logoImageName ? imageSharpMap[logoImageName] : undefined

  const galleryImageMap = new Map<string, ImageSharpFluid>()
  if (imageSharpMap && gallery) {
    for (let imageName of gallery) {
      const image = imageSharpMap[imageName]
      if (image) galleryImageMap.set(imageName, image)
    }
  }

  return (
    <MDXProvider>
      <SEO
        localeCode={localeCode}
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
            logo={logoImage}
            currentPath={path}
            title={folderTitle}
            folderPages={folderPages}
          />

          {galleryImageMap.size > 0 && (
            <Gallery title={folderTitle} imageMap={galleryImageMap} />
          )}

          {app_info && <AppInfo content={app_info} />}
        </div>
      </section>

      <Feedback options={feedbackOptions} />
    </MDXProvider>
  )
}

export default Documentation
