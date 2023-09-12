import { allLanguages, Language } from "@utils/locales"
import router from "@utils/router"

export type Params = { path?: Array<string> }

export const findRoute = async (params: Params) => {
  const theRouter = await router()
  const href = params.path ? `/${params.path.join("/")}` : "/"
  return theRouter.getRouteFromHref(href)
}

export const pathLanguage404 = (path?: Array<string>): Language => {
  return allLanguages.includes(path?.[0] as Language) ? (path?.[0] as Language) : "en"
}
