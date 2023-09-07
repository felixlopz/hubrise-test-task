import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import ServerImage from "@components/ServerImage"
import BlogPost from "@layouts/BlogPost"
import router from "@utils/router"
import { Route, RouteName } from "@utils/router/types"

const blogPost = async (route: Route<RouteName, "blog-post">): Promise<JSX.Element> => {
  const { language, context } = route
  const { mdFile, archives } = context
  const { mdxElement } = await renderDocumentationMdx(mdFile.content, mdFile.contentDirName)

  const blogIndexUri = (await router()).getHref("blog", language)

  const bannerImage = mdFile.bannerFileName ? (
    <ServerImage
      contentDirName={mdFile.contentDirName}
      fileName={mdFile.bannerFileName}
      alt={mdFile.frontMatter.title}
    />
  ) : undefined

  return (
    <BlogPost blogIndexUri={blogIndexUri} mdFile={mdFile} bannerImage={bannerImage} archives={archives}>
      {mdxElement}
    </BlogPost>
  )
}

export default blogPost
