import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { BlogPostContext } from "./interface"

import SEO, { Meta } from "@layouts/shared/components/Seo"
import MDXProvider from "@layouts/shared/components/MdxProvider"
import Breadcrumbs, { Breadcrumb } from "@layouts/shared/components/Breadcrumbs"
import { Post, Sidebar } from "@layouts/shared/components/Blog"
import { ImageSharp } from "@utils/image"
import { BlogNode } from "@layouts/shared/components/Blog/shared/interface"

export interface BlogPostProps {
  data: BlogPostData
  pageContext: BlogPostContext
}

interface BlogPostData {
  mdxNode: BlogPostNode
  bannerImage: {
    childImageSharp?: ImageSharp
  }
}

interface BlogPostNode extends BlogNode {
  frontmatter: BlogNode["frontmatter"] & {
    body: string
    meta: Meta
  }
}

export const graphqlQuery = graphql`
  query blogPostData($mdxNodeId: String!, $bannerImagePathGlob: String!) {
    mdxNode: mdx(id: { eq: $mdxNodeId }) {
      id
      fields {
        localeCode
        path
      }
      frontmatter {
        author
        date
        meta {
          title
          description
        }
        title
      }
      body
    }
    bannerImage: file(absolutePath: { glob: $bannerImagePathGlob }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`

const BlogPost = ({ data, pageContext }: BlogPostProps): JSX.Element => {
  const { t } = useTranslation()

  const { mdxNode, bannerImage } = data
  const { frontmatter } = mdxNode
  const { meta } = frontmatter

  const breadcrumbs: Array<Breadcrumb> = [
    {
      path: pageContext.mainBlogPath,
      label: t("blog.title"),
    },
    { label: mdxNode.frontmatter.title },
  ]

  return (
    <MDXProvider>
      <SEO meta={meta} />

      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className="section">
        <div className="section__in section__in_padding section__in_green section__in_left section__in_sidebar section__in_blog">
          <Sidebar />

          <div className="section__content">
            <Post mdxNode={mdxNode} bannerImage={bannerImage?.childImageSharp} />
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default BlogPost
