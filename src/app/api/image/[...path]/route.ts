import * as fs from "fs/promises"
import { join } from "path"

import { contentDirectory } from "@utils/files"

type Params = { path: Array<string> }

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
    case "png":
      return "image/png"
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    default:
      throw Error(`Image type not supported: "${filename}"`)
  }
}
