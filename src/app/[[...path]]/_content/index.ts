import { LayoutName, Route, RouteName } from "@utils/router/types"

import apps from "./apps"
import blogIndex from "./blogIndex"
import blogPost from "./blogPost"
import documentation from "./documentation"
import documentationIndex from "./documentationIndex"
import documentationSimple from "./documentationSimple"
import frontpage from "./frontpage"
import pricing from "./pricing"

export const renderContent = async (route: Route<RouteName, LayoutName>): Promise<JSX.Element> => {
  switch (route.layout) {
    case "apps":
      return await apps(route as Route<RouteName, "apps">)
    case "blog-index":
      return await blogIndex(route as Route<RouteName, "blog-index">)
    case "blog-post":
      return await blogPost(route as Route<RouteName, "blog-post">)
    case "documentation":
      return await documentation(route as Route<RouteName, "documentation">)
    case "documentation-index":
      return await documentationIndex(route as Route<RouteName, "documentation-index">)
    case "documentation-simple":
      return await documentationSimple(route as Route<RouteName, "documentation-simple">)
    case "frontpage":
      return await frontpage(route as Route<RouteName, "frontpage">)
    case "pricing":
      return await pricing(route as Route<RouteName, "pricing">)
  }
}
