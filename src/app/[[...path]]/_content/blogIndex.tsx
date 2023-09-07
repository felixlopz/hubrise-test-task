import ServerImage from "@components/ServerImage"
import BlogIndex, { BlogFilter } from "@layouts/BlogIndex"
import router from "@utils/router"
import { Route, RouteName } from "@utils/router/types"

const blogIndex = async (route: Route<RouteName, "blog-index">): Promise<JSX.Element> => {
  const { language, context } = route
  const { mdFiles, archives } = context
  const blogIndexUri = (await router()).getHref("blog", language)

  let bannerImages: { [blogUri: string]: React.ReactNode } = {}
  mdFiles.forEach((mdFile) => {
    if (!mdFile.bannerFileName) return
    bannerImages[mdFile.uri] = (
      <ServerImage
        contentDirName={mdFile.contentDirName}
        fileName={mdFile.bannerFileName}
        alt={mdFile.frontMatter.title}
      />
    )
  })

  let filter: BlogFilter = {}
  if (route.name === "blog_archive") {
    filter.year = (route as Route<"blog_archive", "blog-index">).params.year
  }

  return (
    <BlogIndex
      blogIndexUri={blogIndexUri}
      mdFiles={mdFiles}
      bannerImages={bannerImages}
      archives={archives}
      filter={filter}
    />
  )
}

export default blogIndex
