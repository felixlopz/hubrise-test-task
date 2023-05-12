import * as React from "react"
import { useTranslation } from "react-i18next"

import { BlogNode } from "./interface"
import { Title, DateAndAuthor, DateValue, Excerpt, ReadMore, StyledPost, HeroImage } from "./Styles"

import DocumentationRenderer from "@layouts/shared/components/DocumentationRenderer"
import { ImageSharp } from "@utils/image"

interface PostProps {
  mdxNode: BlogNode
  heroImage?: ImageSharp
  showMore?: boolean
  showBody?: boolean
}

const Post = ({ mdxNode, heroImage, showMore, showBody }: PostProps): JSX.Element => {
  const { t } = useTranslation()
  const { frontmatter, excerpt, fields, body } = mdxNode

  const dateAsString = new Date(frontmatter.date).toLocaleDateString()

  return (
    <StyledPost>
      <Title>{frontmatter.title}</Title>

      {heroImage && <HeroImage image={heroImage.gatsbyImageData} alt={frontmatter.title} />}

      <DateAndAuthor>
        {t("misc.posted_on")} <DateValue>{dateAsString}</DateValue> {t("misc.by")} {frontmatter.author}
      </DateAndAuthor>

      {showMore && (
        <>
          <Excerpt>{excerpt}</Excerpt>
          <ReadMore to={fields.path} addLocalePrefix={false}>
            {t("misc.read_more")}
          </ReadMore>
        </>
      )}

      {showBody && body && <DocumentationRenderer body={body} />}
    </StyledPost>
  )
}

export default Post

export type { BlogNode } from "./interface"
