import * as React from "react"

import { BlogNode } from "../shared/interface"
import DateAndAuthor from "../shared/components/DateAndAuthor"

import { BannerImage, StyledPost, StyledTitle } from "./Styles"

import DocumentationRenderer from "@layouts/shared/components/DocumentationRenderer"
import { ImageSharp } from "@utils/image"

interface PostProps {
  mdxNode: BlogNode
  bannerImage?: ImageSharp
}

const Post = ({ mdxNode, bannerImage }: PostProps): JSX.Element => {
  const { frontmatter, body } = mdxNode

  return (
    <StyledPost>
      <StyledTitle frontmatter={frontmatter} />

      <DateAndAuthor frontmatter={frontmatter} />

      {bannerImage && <BannerImage image={bannerImage.gatsbyImageData} alt={frontmatter.title} />}

      <DocumentationRenderer body={body} />
    </StyledPost>
  )
}

export default Post
