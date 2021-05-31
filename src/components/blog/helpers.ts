import { LocaleCode } from '@utils/locales'

export function parseBlogSlug(
  slug: string
): { localeCode?: LocaleCode; name?: string } {
  // slug is the file path relative to "/content", eg: "blog/fr/20200712-pourquoi-j-ai-cree-hubrise"
  // The slug contains both the locale and the blog name
  const [, localeCode, name] = slug.match(/blog\/(.*)\/(.*)/)!
  return {
    localeCode: localeCode as LocaleCode,
    name
  }
}
