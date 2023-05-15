export type MdxNodeType = "documentation" | "blog"

/**
 * Returns the type of the node.
 * @param fileAbsolutePath The absolute path of the node's file.
 */
export const mdxNodeType = (fileAbsolutePath: string): MdxNodeType => {
  return fileAbsolutePath.includes("/var/www/website/content/blog/") ? "blog" : "documentation"
}
