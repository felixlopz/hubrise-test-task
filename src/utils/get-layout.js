const { slash } = require(`gatsby-core-utils`)

/**
 * Return the layout at the given path relative to the layouts/ directory.
 *
 * Ex:
 *
 * getLayout('apps') // returns src/layouts/apps.js
 */
function getLayout(name) {
  return require.resolve(`../layouts/${name}.jsx`)
}

module.exports = {
  getLayout,
}
