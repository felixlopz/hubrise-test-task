import ServerImage from "@components/ServerImage"
import Apps from "@layouts/Apps"
import { Route, RouteName } from "@utils/router/types"

const apps = async (route: Route<RouteName, "apps">): Promise<JSX.Element> => {
  let categoryTitle: string | undefined
  if (route.name === "apps_category") {
    categoryTitle = (route as Route<"apps_category", "apps">).params.categoryTitle
  }

  let logoImages: { [logo: string]: React.ReactNode } = {}
  route.context.yaml.content.categories.forEach((category) => {
    category.apps.forEach((app) => {
      if (!app.logo) return
      logoImages[app.logo] = <ServerImage contentDirName="/images/app-logos" fileName={app.logo} alt={app.title} />
    })
  })

  return (
    <Apps language={route.language} yaml={route.context.yaml} logoImages={logoImages} categoryTitle={categoryTitle} />
  )
}

export default apps
