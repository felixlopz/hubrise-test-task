import * as path from 'path'
import * as yaml from 'js-yaml'
import * as fs from 'fs'

/**
 * Import yaml in server-side code in a way that works when the site
 * is run as a theme.
 *
 * @example
 * ```
 * const docLinks = loadYaml(`src/data/sidebars/doc-links.yaml`)
 * ```
 */
function loadYaml(yamlPath: string): any {
  return yaml.safeLoad(
    fs.readFileSync(path.resolve(`${__dirname}/../../../${yamlPath}`), 'utf8')
  )
}

export default loadYaml
