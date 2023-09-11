"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import Breadcrumbs from "@components/Breadcrumbs"
import DocumentationContainer from "@components/DocumentationContainer"
import { DocumentationContextProvider } from "@components/DocumentationContext"
import useTranslation from "@hooks/client/useTranslation"
import { DocFolder, DocMdFile } from "@utils/DocIndexer/types"
import { ContentImage } from "@utils/contentImage"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"

import AppInfo from "./AppInfo"
import DocumentationSlideshow from "./DocumentationSlideshow"
import Feedback from "./Feedback"
import Gallery from "./Gallery"
import Navigator from "./Navigator"
import { Content, Logo, Main, Navigation, Page, Warning } from "./Styles"

interface DocumentationProps {
  mdFile: DocMdFile
  folder: DocFolder
  headerLinks: Array<HeaderLink>
  logoImage?: ContentImage
  galleryImages: Array<ContentImage>
  contentImages: Array<ContentImage>
  children: React.ReactNode
}

const Documentation = ({
  mdFile,
  folder,
  headerLinks,
  logoImage,
  galleryImages,
  contentImages,
  children,
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <DocumentationContextProvider>
      <DocumentationSlideshow
        contentImages={contentImages}
        title={[folder.name, mdFile.frontMatter.title].join(" - ")}
      />

      <Breadcrumbs breadcrumbs={mdFile.breadcrumbs} />

      <Page>
        {mdFile.copyFromLanguage && <Warning>{t("documentation.language_warning." + mdFile.copyFromLanguage)}</Warning>}

        {logoImage && (
          <Logo>
            <Link href={folder.uri}>
              <Image {...logoImage} alt={mdFile.frontMatter.title} />
            </Link>
          </Logo>
        )}

        <Navigation>
          <Navigator mdFile={mdFile} folder={folder} headerLinks={headerLinks} />
        </Navigation>

        <Main>
          <Content>
            <DocumentationContainer title={mdFile.frontMatter.title}>{children}</DocumentationContainer>
          </Content>

          {galleryImages.length > 0 && (
            <Content>
              <Gallery folder={folder} images={galleryImages} />
            </Content>
          )}

          {mdFile.frontMatter.app_info && (
            <Content>
              <AppInfo appInfo={mdFile.frontMatter.app_info} />
            </Content>
          )}
        </Main>
      </Page>

      <Feedback mdFile={mdFile} />
    </DocumentationContextProvider>
  )
}

export default Documentation
