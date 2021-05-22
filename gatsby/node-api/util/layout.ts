/**
 * Return the layout at the given path relative to the layouts/ directory.
 *
 * Ex:
 *
 * getLayoutPath('apps') // returns src/layouts/apps.js
 */
export function getLayoutPath(name: string): string {
  const suffix = name === 'apps' ? 'tsx' : 'jsx'
  return require.resolve(`${__dirname}/../../../src/layouts/${name}.${suffix}`)
}
