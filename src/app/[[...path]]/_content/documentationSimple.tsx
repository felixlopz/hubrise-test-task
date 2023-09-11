import { renderDocumentationMdx } from "@components/DocumentationMdxRenderer"
import DocumentationSimple from "@layouts/DocumentationSimple"
import { ContentDirName } from "@utils/files"
import { Route, RouteName } from "@utils/router/types"

const documentationSimple = async (route: Route<RouteName, "documentation-simple">): Promise<JSX.Element> => {
  const { language, context } = route
  const { frontMatter, content } = context

  const contentDirName: ContentDirName = `/${language}`
  const { mdxElement } = await renderDocumentationMdx(content, contentDirName)

  return <DocumentationSimple title={frontMatter.title}>{mdxElement}</DocumentationSimple>
}

export default documentationSimple
