/**
 * Return the layout at the given path relative to the layouts/ directory.
 *
 * Ex:
 *
 * getLayout('apps') // returns src/layouts/apps.js
 */
function getLayout(name) {
  return require.resolve(`${__dirname}/../layouts/${name}.jsx`)
}

module.exports = {
  getLayout
}
