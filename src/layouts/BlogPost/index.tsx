"use client"

import * as React from "react"

import Layout from "@components/Blog/Layout"
import Post from "@components/Blog/Post"
import Breadcrumbs from "@components/Breadcrumbs"
import useTranslation from "@hooks/client/useTranslation"
import { ContentImage } from "@utils/ contentImage"
import { BlogArchives, BlogMdFile } from "@utils/BlogIndexer/types"
import { DocLink, Href } from "@utils/DocIndexer/types"

export interface BlogPostProps {
  blogIndexUri: Href
  mdFile: BlogMdFile
  bannerImage?: ContentImage
  archives: BlogArchives
  children: React.ReactNode
}

const BlogPost = ({ blogIndexUri, mdFile, bannerImage, archives, children: body }: BlogPostProps): JSX.Element => {
  const { t } = useTranslation()

  const breadcrumbs: Array<DocLink> = [
    { label: t("blog.title"), uri: blogIndexUri },
    { label: mdFile.frontMatter.title, uri: mdFile.uri },
  ]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <Layout archives={archives}>
        <Post mdFile={mdFile} bannerImage={bannerImage}>
          {body}
        </Post>
      </Layout>
    </>
  )
}

export default BlogPost
