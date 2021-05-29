import { Customization, CustomizationMap } from './customization'
import {
  defaultLocaleCode,
  LocaleCode,
  localeCodes
} from '../../../src/utils/locales'
import { MDXDocumentationNode } from '../../../src/data/mdx'
import { GraphQLFunction } from '../util/types'
import { ImageSharpMap, ImageSharpMapByPath } from './image'

export interface Folder {
  /** The folder name (eg "deliveroo") */ name: string
  /** The path relative to /content (eg "/apps/deliveroo"). TODO: remove (not passed to context) */ srcPath: string
  parent?: Folder
  children: Array<Folder>
  folderFilesMap: FolderFilesMap
  imageSharpMap?: ImageSharpMap
}

export type FolderFilesMap = {
  [K in LocaleCode]?: FolderFiles
}

export interface FolderFiles {
  customization: Customization
  /** MDX nodes sorted by position */ mdxNodes: Array<MDXDocumentationNode>
}

/**
 * Parses the MDX files in GraphQL and builds the Folder hierarchy from the MDX relative paths.
 * Returns the root Folder, which corresponds to the "content" folder (ie direct children are "apps", "base", ...).
 * @param graphql
 * @param customizationsMap
 * @param imageSharpMapByPath
 */
export async function generateFolders(
  graphql: GraphQLFunction,
  customizationsMap: CustomizationMap,
  imageSharpMapByPath: ImageSharpMapByPath
): Promise<Folder> {
  const { data, errors } = await graphql<FolderGQL>(`
    query generateFolders {
      allMdx(filter: { frontmatter: { layout: { eq: "documentation" } } }) {
        nodes {
          body
          frontmatter {
            app_info {
              availability
              category
              contact
              price_range
              website
            }
            gallery
            meta {
              description
              title
            }
            path_override
            position
            title
          }
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
    name: '',
    srcPath: '',
    folderFilesMap: {},
    children: []
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

    const folder = findOrInsertFolder(
      rootFolder,
      folderPath,
      imageSharpMapByPath.get(folderPath)
    )

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

function findOrInsertFolder(
  rootFolder: Folder,
  path: string,
  imageSharpMap?: ImageSharpMap
): Folder {
  let folder = rootFolder

  path.split('/').forEach((dirname) => {
    let childFolder = folder.children.find((folder) => folder.name === dirname)
    if (!childFolder) {
      childFolder = {
        name: dirname,
        srcPath: `${folder.srcPath}/${dirname}`,
        parent: folder,
        children: [],
        folderFilesMap: {},
        imageSharpMap
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
