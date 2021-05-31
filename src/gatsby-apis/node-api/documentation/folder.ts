import { Customization, CustomizationMap } from './customization'
import { GraphQLFunction } from '../util/types'
import {
  defaultLocaleCode,
  LocaleCode,
  localeCodes
} from '../../../utils/locales'

export interface Folder {
  /** The folder name (eg "deliveroo"). */
  name: string
  /** The path relative to /content (eg "apps/deliveroo"). */
  relativeDirectory: string
  parent?: Folder
  children: Array<Folder>
  folderFilesMap: FolderFilesMap
}

export type FolderFilesMap = {
  [K in LocaleCode]?: FolderFiles
}

export interface FolderFiles {
  customization: Customization
  /** MDX nodes sorted by position */ mdxNodes: Array<MDXDocumentationNode>
}

export interface MDXDocumentationNode {
  body: string
  frontmatter: {
    path_override?: string
    position: number
    title: string
  }
  id: string
  parent: {
    /** File name, eg: "map-ref-codes" */
    name: string
    /** Directory path, eg: "apps/deliveroo/en" */
    relativeDirectory: string
    /** File path, eg: "apps/deliveroo/en/map-ref-codes.md" */
    relativePath: string
  }
}

/**
 * Parses the MDX files in GraphQL and builds the Folder hierarchy from the MDX relative paths.
 * Returns the root Folder, which corresponds to the "content" folder (ie direct children are "apps", "base", ...).
 * @param graphql
 * @param customizationsMap
 */
export async function generateFolders(
  graphql: GraphQLFunction,
  customizationsMap: CustomizationMap
): Promise<Folder> {
  const { data, errors } = await graphql<FolderGQL>(`
    query generateFolders {
      allMdx(filter: { frontmatter: { layout: { eq: "documentation" } } }) {
        nodes {
          frontmatter {
            path_override
            position
            title
          }
          id
          parent {
            ... on File {
              name
              relativeDirectory
              relativePath
            }
          }
        }
      }
    }
  `)
  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  const folderFilesByPath = new Map<string, FolderFiles>()
  customizationsMap.forEach((customization, path) =>
    folderFilesByPath.set(path, { customization, mdxNodes: [] })
  )

  for (let mdxNode of data.allMdx.nodes) {
    const path = mdxNode.parent.relativeDirectory
    let folderFiles = folderFilesByPath.get(path)
    if (!folderFiles) {
      console.log(
        `Skipping ${mdxNode.parent.relativePath}: no customization.yaml file was found in this file's directory.`
      )
      continue
    }
    folderFiles.mdxNodes.push(mdxNode)
  }

  const rootFolder: Folder = {
    children: [],
    folderFilesMap: {},
    name: '',
    relativeDirectory: ''
  }

  folderFilesByPath.forEach((folderFiles, path) => {
    // MDX files must be in a directory ending in /en or /fr, indicating the locale code of the MDX.
    const localeCode = localeCodes.find((code) => path.endsWith(code))
    if (!localeCode) {
      console.log(
        `The MD files located in ${path} will be skipped because they do not belong to a language folder (/en, /fr, etc.).`
      )
      return
    }

    const folderPath = path.replace(new RegExp(`\/${localeCode}$`), '')

    const folder = findOrInsertFolder(rootFolder, folderPath)

    // Sort MDX nodes in place
    folderFiles.mdxNodes.sort(
      (node1, node2) =>
        (node1.frontmatter.position || Number.MAX_SAFE_INTEGER) -
        (node2.frontmatter.position || Number.MAX_SAFE_INTEGER)
    )

    folder.folderFilesMap[localeCode] = folderFiles
  })

  return rootFolder
}

interface FolderGQL {
  allMdx: {
    nodes: Array<MDXDocumentationNode>
  }
}

function findOrInsertFolder(rootFolder: Folder, path: string): Folder {
  let folder = rootFolder

  path.split('/').forEach((dirname) => {
    let childFolder = folder.children.find((folder) => folder.name === dirname)
    if (!childFolder) {
      const relativeDirectory = folder.relativeDirectory
        ? `${folder.relativeDirectory}/${dirname}`
        : dirname
      childFolder = {
        children: [],
        folderFilesMap: {},
        name: dirname,
        parent: folder,
        relativeDirectory
      }
      folder.children.push(childFolder)
    }
    folder = childFolder
  })

  return folder
}

/**
 * Returns the path of a folder on the website with a leading slash (eg "/fr/deliveroo")
 * @param folder
 * @param localeCode
 */
export function getFolderPath(folder: Folder, localeCode: LocaleCode): string {
  if (!folder.parent) {
    return localeCode === defaultLocaleCode ? '' : `/${localeCode}`
  }

  const customization = getFolderFiles(folder, localeCode)?.customization
  const parentPath = getFolderPath(folder.parent, localeCode)
  const overridenName = customization?.path_override || folder.name
  return `${parentPath}/${overridenName}`
}

export function getFolderFiles(
  folder: Folder,
  localeCode: LocaleCode
): FolderFiles | undefined {
  return (
    folder.folderFilesMap[localeCode] ||
    folder.folderFilesMap[defaultLocaleCode]
  )
}

/**
 * Returns the path where images are stored, relative to "content", with no leading slash (eg "contributing/images").
 * @param folder
 */
export function getImagesRelativeDirectory(folder: Folder): string {
  return folder.relativeDirectory + '/images'
}
