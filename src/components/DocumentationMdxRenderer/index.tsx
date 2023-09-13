import NextLink from "next/link"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import { ContentImage } from "@utils/contentImage"
import { ContentDirName } from "@utils/files"
import rehypeImagePlugin from "@utils/mdx/rehypeImagePlugin"
import remarkHeadingsPlugin from "@utils/mdx/remarkHeadingsPlugin"
import type { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"

import A from "./components/A"
import CallSummaryTable from "./components/CallSummaryTable"
import ContactFormToggle from "./components/ContactFormToggle"
import Details from "./components/Details"
import { headerGenerate } from "./components/Headers"
import Img from "./components/Img"
import InlineImage from "./components/InlineImage"
import Label from "./components/Label"
import Pre from "./components/Pre"
import Table from "./components/Table"

export const renderDocumentationMdx = async (
  content: string,
  imageDirName: ContentDirName,
): Promise<{ mdxElement: JSX.Element; headerLinks: Array<HeaderLink>; contentImages: Array<ContentImage> }> => {
  const headerLinks: Array<HeaderLink> = []
  const contentImages: Array<ContentImage> = []

  const { content: mdxElement } = await compileMDX({
    source: content,
    components: {
      a: A,
      CallSummaryTable,
      ContactFormToggle,
      details: Details,
      ...headerGenerate([`h2`, `h3`, `h4`]),
      img: Img,
      InlineImage,
      Label,
      Link: ({ href, children }) => <NextLink href={href}>{children}</NextLink>,
      pre: Pre,
      table: Table,
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkHeadingsPlugin, headerLinks]],
        rehypePlugins: [rehypeImagePlugin(imageDirName, contentImages)],
      },
    },
  })

  const largeContentImages = contentImages.filter((image) => image.width >= MIN_IMAGE_WIDTH_FOR_SLIDESHOW)
  return { mdxElement, headerLinks, contentImages: largeContentImages }
}

const MIN_IMAGE_WIDTH_FOR_SLIDESHOW = 200