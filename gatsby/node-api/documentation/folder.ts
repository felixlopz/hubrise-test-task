import fs from 'fs'
import path, { posix } from 'path'

import { defaultLocaleCode, LocaleCode, localeCodes } from '../../../src/utils/locales'
import {
  Customization,
  CUSTOMIZATION_FILE_NAME,
  getCustomizationFromFolder
} from './customization'

const IGNORED_FOLDERS = ['images']

export interface FolderFiles {
  customization: Customization
  contentFileNames: Array<string>
}

export interface Folder {
  name: string
  path: string
  localeMap: {
    [K in LocaleCode]?: FolderFiles
  }
  parent?: Folder
  children: Array<Folder>
}

export async function parseLocaleFolder(
  folderPath: string
): Promise<FolderFiles> {
  const customization = await getCustomizationFromFolder(folderPath)
  const files = await fs.promises.readdir(folderPath, { withFileTypes: true })
  const contentFileNames: Array<string> = files
    .filter((file) => file.isFile() && file.name !== CUSTOMIZATION_FILE_NAME)
    .map((file) => file.name)

  return {
    customization,
    contentFileNames
  }
}

export async function parseFolderRecursively(
  pathToFolder: string,
  folderName: string,
  parentNode?: Folder
): Promise<Folder> {
  const currentNode: Folder = {
    name: folderName,
    path: path.join(pathToFolder, folderName),
    localeMap: {},
    parent: parentNode,
    children: []
  }

  const files = await fs.promises.readdir(currentNode.path, {
    withFileTypes: true
  })

  const promises = files.map(async (file) => {
    if (!file.isDirectory() || IGNORED_FOLDERS.includes(file.name)) {
      return
    }

    if ((localeCodes as String[]).includes(file.name)) {
      const localeFolderPath = path.join(currentNode.path, file.name)
      currentNode.localeMap[file.name] = await parseLocaleFolder(
        localeFolderPath
      )
    } else {
      const childNode: Folder = await parseFolderRecursively(
        currentNode.path,
        file.name,
        currentNode
      )

      currentNode.children.push(childNode)
    }
  })

  await Promise.all(promises)

  return currentNode
}

export function normalizePath(filePath: string): string {
  return filePath.split(path.sep).join(path.posix.sep)
}

export function findFolderNodeByFilePath(
  rootFolder: Folder,
  fileAbsolutePath: string
): Folder | null {
  function recursiveSearch(folderNode: Folder): Folder | null {
    if (fileAbsolutePath.startsWith(normalizePath(folderNode.path))) {
      for (let localeCode of localeCodes) {
        const localeFolderPath = path.join(folderNode.path, localeCode)
        if (fileAbsolutePath.startsWith(normalizePath(localeFolderPath))) {
          return folderNode
        }
      }

      for (let childNode of folderNode.children) {
        const folder = recursiveSearch(childNode)
        if (folder) return folder
      }
    }

    return null
  }

  return recursiveSearch(rootFolder)
}

export const getLocaleCodeFromPath = (path: string): LocaleCode => {
  return (
    localeCodes.find((localeCode) =>
      path.includes(posix.sep + localeCode + posix.sep)
    ) || defaultLocaleCode
  )
}
