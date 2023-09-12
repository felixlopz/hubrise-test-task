import { Heading } from "mdast"
import { Node } from "unist"
import { visit } from "unist-util-visit"
import { VFile } from "vfile"

export type HeaderLink = { title: string; depth: number }

const remarkHeadingsPlugin = (headerLinks: Array<HeaderLink>) => {
  return function transformer(node: Node, _file: VFile) {
    visit(node, `heading`, (heading: Heading) => {
      headerLinks.push({
        title: (heading.children[0] as any).value,
        depth: heading.depth,
      })
    })
  }
}

export default remarkHeadingsPlugin
