import path from 'path'
import fs from 'fs'
import * as yaml from 'js-yaml'

export const CUSTOMIZATION_FILE_NAME = 'customization.yaml'

export interface Customization {
  path_override?: string
  name?: string
}

export async function getCustomizationFromFolder(
  folderPath: string
): Promise<Customization> {
  try {
    const filePath = path.join(folderPath, CUSTOMIZATION_FILE_NAME)
    const fileContent: string = await fs.promises.readFile(filePath, {
      encoding: 'utf-8'
    })
    return (yaml.safeLoad(fileContent) || {}) as Customization
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {}
    } else {
      throw error
    }
  }
}

