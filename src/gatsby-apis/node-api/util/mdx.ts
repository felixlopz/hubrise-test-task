export type MdxNodeType = "documentation" | "blog"

/**
 * Returns the type of the node.
 * @param fileAbsolutePath The absolute path of the node's file.
 */
export const mdxNodeType = (fileAbsolutePath: string): MdxNodeType => {
  return fileAbsolutePath.includes("/content/blog/") ? "blog" : "documentation"
}
