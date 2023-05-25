import * as React from "react"

import { BlogNode } from "../shared/interface"
import DateAndAuthor from "../shared/components/DateAndAuthor"
import Title from "../shared/components/Title"

import { BannerImage, StyledPost } from "./Styles"

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
      <Title frontmatter={frontmatter} />

      {bannerImage && <BannerImage image={bannerImage.gatsbyImageData} alt={frontmatter.title} />}

      <DateAndAuthor frontmatter={frontmatter} />

      <DocumentationRenderer body={body} />
    </StyledPost>
  )
}

export default Post
