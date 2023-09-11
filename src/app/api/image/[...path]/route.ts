import * as fs from "fs/promises"
import { join } from "path"

import { contentDirectory } from "@utils/files"

type Params = { path: Array<string> }

export const dynamicParams = false

export async function generateStaticParams(): Promise<Array<Params>> {
  const isImage = (filename: string) => /\.(png|jpg|jpeg)$/i.test(filename)

  const findImageFiles = async (...path: Array<string>): Promise<Array<Params>> => {
    let pathParams: Params[] = []
    const directory = join(contentDirectory, ...path)
    const entries = await fs.readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        pathParams = pathParams.concat(await findImageFiles(...path, entry.name))
      } else if (isImage(entry.name)) {
        pathParams.push({ path: [...path, entry.name] })
      }
    }
    return pathParams
  }

  return findImageFiles()
}

// GET /api/image/[..path] returns the image at /content/[..path]
export async function GET(request: Request, { params }: { params: Params }): Promise<Response> {
  const { path } = params

  const filePath = join(contentDirectory, ...path)
  console.log(`Render image: ${filePath}`)

  const file = await fs.readFile(filePath)

  return new Response(file, {
    headers: {
      "Content-Type": mimeType(path[path.length - 1]),
    },
  })
}

const mimeType = (filename: string): string => {
  const ext = filename.split(".").pop()
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "svg":
      return "image/svg+xml"
    case "webp":
      return "image/webp"
    default:
      throw Error(`Image type not supported: "${filename}"`)
  }
}
