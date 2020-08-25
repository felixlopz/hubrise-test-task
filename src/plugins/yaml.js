const jsYaml = require('js-yaml')

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest
}) => {
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

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Yaml: {
      parsedContent: {
        type: `JSON`,
        resolve: (source) => jsYaml.safeLoad(source.internal.content)
      }
    }
  })
}
