import * as yaml from 'js-yaml'

export async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest
}) {
  if (node.internal.type === 'File' && node.base.endsWith(`.yaml`)) {
    const content = await loadNodeContent(node)
    const id = createNodeId(`${node.id} >>> Yaml`)

    const yamlNode = {
      id,
      children: [],
      parent: node.id,
      internal: {
        content,
        contentDigest: createContentDigest(content),
        type: 'Yaml'
      }
    }

    const { createNode, createParentChildLink } = actions
    createNode(yamlNode)
    createParentChildLink({ parent: node, child: yamlNode })
  }
}

export async function createResolvers({ createResolvers }) {
  createResolvers({
    Yaml: {
      parsedContent: {
        type: `JSON`,
        resolve: (source) => yaml.safeLoad(source.internal.content)
      }
    }
  })
}
