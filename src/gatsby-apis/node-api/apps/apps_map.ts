import { GraphQLFunction } from '../util/types'
import { getLocaleCodeFromFilePath } from '../util/locale'
import { LocaleCode } from '../../../utils/locales'
import { pathWithLocale } from '../util/urls'
import { IApps } from '../../../layouts/apps/interface'

/** Associate a locale code to an IApps  */
export type IAppsMap = Map<LocaleCode, IApps>

export async function getAppsMap(graphql: GraphQLFunction): Promise<IAppsMap> {
  const { data, errors } = await graphql<AppsCreatePageGQL>(`
    query {
      allFile(filter: { base: { eq: "apps.yaml" } }) {
        nodes {
          relativePath
          childYaml {
            parsedContent
          }
        }
      }
    }
  `)
  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  const appsMap: IAppsMap = new Map<LocaleCode, IApps>()

  data.allFile.nodes.forEach((node) => {
    appsMap.set(
      getLocaleCodeFromFilePath(node.relativePath),
      node.childYaml.parsedContent
    )
  })

  appsMap.forEach((apps, localeCode) => generatePaths(localeCode, apps))

  return appsMap
}

interface AppsCreatePageGQL {
  allFile: {
    nodes: Array<{
      relativePath: string
      childYaml: {
        parsedContent: IApps
      }
    }>
  }
}

const APPS_PAGE_PATH = '/apps'

function getAppsPagePath(localeCode: LocaleCode, categoryTitle?: string) {
  let path = pathWithLocale(localeCode, APPS_PAGE_PATH)
  if (categoryTitle) {
    const slug = categoryTitle.replace(/ +/g, '-').toLowerCase()
    path = path + `/${slug}`
  }
  return path
}

function generatePaths(localeCode: LocaleCode, apps: IApps) {
  apps.path = getAppsPagePath(localeCode)
  apps.content.categories = apps.content.categories.map((category) => ({
    ...category,
    path: getAppsPagePath(localeCode, category.title)
  }))
}
