"use client"

import * as React from "react"

import Layout from "@components/Blog/Layout"
import Post from "@components/Blog/Post"
import Breadcrumbs from "@components/Breadcrumbs"
import { DocumentationContextProvider } from "@components/DocumentationContext"
import DocumentationSlideshow from "@components/DocumentationSlideshow"
import useTranslation from "@hooks/client/useTranslation"
import { BlogArchives, BlogMdFile } from "@utils/BlogIndexer/types"
import { DocLink, Href } from "@utils/DocIndexer/types"
import { ContentImage } from "@utils/contentImage"

export interface BlogPostProps {
  blogIndexUri: Href
  mdFile: BlogMdFile
  bannerImage?: ContentImage
  archives: BlogArchives
  contentImages: Array<ContentImage>
  children: React.ReactNode
}

const BlogPost = ({
  blogIndexUri,
  mdFile,
  bannerImage,
  archives,
  contentImages,
  children,
}: BlogPostProps): JSX.Element => {
  const { t } = useTranslation()

  const breadcrumbs: Array<DocLink> = [
    { label: t("blog.title"), uri: blogIndexUri },
    { label: mdFile.frontMatter.title, uri: mdFile.uri },
  ]

  return (
    <DocumentationContextProvider>
      <DocumentationSlideshow contentImages={contentImages} title={mdFile.frontMatter.title} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Layout archives={archives}>
        <Post mdFile={mdFile} bannerImage={bannerImage}>
          {children}
        </Post>
      </Layout>
    </DocumentationContextProvider>
  )
}

export default BlogPost
