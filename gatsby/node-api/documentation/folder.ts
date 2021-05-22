import fs from 'fs'
import path, { posix } from 'path'

import {
  defaultLocaleCode,
  LocaleCode,
  localeCodes
} from '../../../src/utils/locales'
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
  parentFolder?: Folder
): Promise<Folder> {
  const folder: Folder = {
    name: folderName,
    path: path.join(pathToFolder, folderName),
    localeMap: {},
    parent: parentFolder,
    children: []
  }

  const files = await fs.promises.readdir(folder.path, {
    withFileTypes: true
  })

  const promises = files.map(async (file) => {
    if (!file.isDirectory() || IGNORED_FOLDERS.includes(file.name)) {
      return
    }

    if ((localeCodes as String[]).includes(file.name)) {
      const localeFolderPath = path.join(folder.path, file.name)
      folder.localeMap[file.name] = await parseLocaleFolder(localeFolderPath)
    } else {
      const childFolder: Folder = await parseFolderRecursively(
        folder.path,
        file.name,
        folder
      )

      folder.children.push(childFolder)
    }
  })

  await Promise.all(promises)

  return folder
}

export function normalizePath(filePath: string): string {
  return filePath.split(path.sep).join(path.posix.sep)
}

export function folderByFilePath(
  rootFolder: Folder,
  fileAbsolutePath: string
): Folder | null {
  function recursiveSearch(folder: Folder): Folder | null {
    if (fileAbsolutePath.startsWith(normalizePath(folder.path))) {
      for (let localeCode of localeCodes) {
        const localeFolderPath = path.join(folder.path, localeCode)
        if (fileAbsolutePath.startsWith(normalizePath(localeFolderPath))) {
          return folder
        }
      }

      for (let childFolder of folder.children) {
        const folder = recursiveSearch(childFolder)
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
