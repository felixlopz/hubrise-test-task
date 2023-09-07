"use client"

import Link from "next/link"
import * as React from "react"

import Breadcrumbs from "@components/Breadcrumbs"
import DocumentationContainer from "@components/DocumentationContainer"
import useTranslation from "@hooks/client/useTranslation"
import { DocFolder, DocMdFile } from "@utils/DocIndexer/types"
import { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"

import AppInfo from "./AppInfo"
import Feedback from "./Feedback"
import Gallery from "./Gallery"
import Navigator from "./Navigator"
import { Content, Logo, Main, Navigation, Page, Warning } from "./Styles"

interface DocumentationProps {
  mdFile: DocMdFile
  folder: DocFolder
  headerLinks: Array<HeaderLink>
  logoImage?: React.ReactNode
  galleryImages: Array<React.ReactNode>
  children: React.ReactNode
}

const Documentation = ({
  mdFile,
  folder,
  headerLinks,
  logoImage,
  galleryImages,
  children,
}: DocumentationProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <Breadcrumbs breadcrumbs={mdFile.breadcrumbs} />

      <Page>
        {mdFile.copyFromLanguage && <Warning>{t("documentation.language_warning." + mdFile.copyFromLanguage)}</Warning>}

        {logoImage && (
          <Logo>
            <Link href={folder.uri}>{logoImage}</Link>
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
              <Gallery folder={folder} language={mdFile.language} images={galleryImages} />
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
    </>
  )
}

export default Documentation
