import Image from "next/image"
import * as React from "react"

import useTranslation from "@hooks/client/useTranslation"
import { BlogMdFile } from "@utils/BlogIndexer/types"
import { ContentImage } from "@utils/contentImage"
import imageSizes from "@utils/imageSizes"

import DateAndAuthor from "../shared/components/DateAndAuthor"
import Title from "../shared/components/Title"

import { BannerImage, BannerLink, Excerpt, ReadMore, StyledPostSummary, Text, TitleLink } from "./Styles"

interface PostSummaryProps {
  mdFile: BlogMdFile
  bannerImage?: ContentImage
}

const PostSummary = ({ mdFile, bannerImage }: PostSummaryProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontMatter } = mdFile

  return (
    <StyledPostSummary>
      <TitleLink href={mdFile.uri}>
        <Title frontMatter={frontMatter} />
      </TitleLink>

      {bannerImage && (
        <BannerLink href={mdFile.uri}>
          <BannerImage>
            <Image {...bannerImage} alt={mdFile.frontMatter.title} sizes={imageSizes.postSummary} />
          </BannerImage>
        </BannerLink>
      )}

      <Text>
        <DateAndAuthor frontMatter={frontMatter} />
        {mdFile.frontMatter.excerpt && <Excerpt>{mdFile.frontMatter.excerpt}</Excerpt>}
        <ReadMore href={mdFile.uri}>{t("misc.read_more")}</ReadMore>
      </Text>
    </StyledPostSummary>
  )
}

export default PostSummary
