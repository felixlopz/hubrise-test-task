export type Locale = {
  code: string
  tag: string
  default?: boolean
}

const locales: Array<Locale> = [
  {
    code: `en`,
    tag: `en-GB`,
    default: true
  },
  {
    code: `fr`,
    tag: `fr-FR`
  }
]

export default locales
