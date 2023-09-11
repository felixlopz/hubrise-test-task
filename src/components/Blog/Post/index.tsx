import * as React from "react"

import DocumentationContainer from "@components/DocumentationContainer"
import { ContentImage } from "@utils/ contentImage"
import { BlogMdFile } from "@utils/BlogIndexer/types"

import DateAndAuthor from "../shared/components/DateAndAuthor"

import { BannerImage, StyledPost, StyledTitle } from "./Styles"

interface PostProps {
  mdFile: BlogMdFile
  bannerImage?: ContentImage
  children: React.ReactNode
}

const Post = ({ mdFile, bannerImage, children }: PostProps): JSX.Element => {
  const { frontMatter } = mdFile

  return (
    <StyledPost>
      <StyledTitle frontMatter={frontMatter} />

      <DateAndAuthor frontMatter={frontMatter} />

      {bannerImage && <BannerImage {...bannerImage} alt={mdFile.frontMatter.title} />}

      <DocumentationContainer>{children}</DocumentationContainer>
    </StyledPost>
  )
}

export default Post
