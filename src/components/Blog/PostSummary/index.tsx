import Link from "next/link"
import * as React from "react"

import useTranslation from "@hooks/client/useTranslation"
import { BlogMdFile } from "@utils/BlogIndexer/types"

import DateAndAuthor from "../shared/components/DateAndAuthor"

import { BannerImage, Excerpt, ReadMore, StyledPostSummary, StyledTitle, Text } from "./Styles"

interface PostSummaryProps {
  mdFile: BlogMdFile
  bannerImage?: React.ReactNode
}

const PostSummary = ({ mdFile, bannerImage }: PostSummaryProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontMatter } = mdFile

  return (
    <StyledPostSummary>
      <StyledTitle frontMatter={frontMatter} />

      {bannerImage && (
        <Link href={mdFile.uri}>
          <BannerImage>{bannerImage}</BannerImage>
        </Link>
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
