import remark from 'remark'
import remarkHtml from 'remark-html'

/**
 * Applies kebab case to a regular string.
 * NOTE: strips away any punctuation, except for `_`
 *
 * @param   input
 * @param   keepCase - Keep original letter casing, or transform into lowercase.
 * @returns
 */
export const kebabify = (input: string, keepCase: boolean = false): string => {
  const result = input
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)

  return keepCase ? result : result.toLowerCase()
}

/**
 * Generatey key prop for repeating sibling React elements.
 */
export const generateKey = (prefix: string, suffix: string | number): string =>
  `${prefix}--${suffix}`

export const getLanguageFromAbsolutePath = (absolutePath: string): string => {
  const pathItems = absolutePath.split('/')
  return pathItems[pathItems.length - 2]
}

export const markdownToHtml = (markdown: string): string =>
  remark()
    .use(remarkHtml)
    .processSync(markdown.replace(/\n/g, '\n\n'))
    .toString()
