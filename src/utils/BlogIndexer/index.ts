import { ContentDirName, listEntries, readMdFile } from "@utils/files"
import { allLanguages, defaultLanguage, Language } from "@utils/locales"

import { Href } from "../DocIndexer/types"

import { BlogFrontMatter, BlogMdFile } from "./types"

class BlogIndexer {
  mdFiles: Partial<Record<Language, Array<BlogMdFile>>> = {}

  constructor(private contentDirName: ContentDirName) {}

  async initialize() {
    const languages = await listEntries(this.contentDirName, "directories")
    for (const language of languages) {
      if (!this.isLanguageFolder(language)) continue
      await this.indexLanguageFolder(language)
    }
  }

  private isLanguageFolder(folderName: string): folderName is Language {
    return allLanguages.includes(folderName as Language)
  }

  private async indexLanguageFolder(language: Language): Promise<void> {
    const languageDirName: ContentDirName = `${this.contentDirName}/${language}`

    // Add all posts
    const postNames = await listEntries(languageDirName, "directories")
    for (const postName of postNames) {
      await this.indexPostFolder(languageDirName, language, postName)
    }

    // Sort them by date, most recent first
    this.mdFiles[language]!.sort((a, b) => this.parseDate(b).comparable - this.parseDate(a).comparable)
  }

  private async indexPostFolder(contentDirName: ContentDirName, language: Language, postName: string): Promise<void> {
    const postDirName: ContentDirName = `${contentDirName}/${postName}`
    const filenames = await listEntries(postDirName, "files")
    for (const filename of filenames) {
      if (filename === "__post.md") {
        const baseName = filename.replace(/\.md$/, "")
        const { frontMatter, content } = await readMdFile<BlogFrontMatter>(postDirName, baseName)

        // postName = 20230510-catalog-variants => uri = /blog/catalog-variants
        const uriPart = postName.replace(/^\d{8}-/, "")
        const uri: Href = language === defaultLanguage ? `/blog/${uriPart}` : `/${language}/blog/${uriPart}`

        this.mdFiles[language] ||= []
        this.mdFiles[language]!.push({
          contentDirName: postDirName,
          baseName,
          uri,
          language,
          frontMatter,
          content,
          bannerFileName: filenames.find((filename) => /^__banner\.(jpg|png|webp)$/.test(filename)),
        })
      }
    }
  }

  allYears(language: Language): Array<number> {
    const years = new Set<number>()
    this.mdFiles[language]?.forEach((mdFile) => years.add(this.parseDate(mdFile).year))
    return Array.from(years).sort((a, b) => b - a)
  }

  allMdFiles(language: Language): Array<BlogMdFile> {
    return this.mdFiles[language]!
  }

  mdFilesByYear(language: Language, year: number): Array<BlogMdFile> {
    return this.mdFiles[language]!.filter((mdFile) => this.parseDate(mdFile).year === year)
  }

  private parseDate(mdFile: BlogMdFile): { year: number; comparable: number } {
    const date = new Date(mdFile.frontMatter.date)
    return {
      year: date.getFullYear(),
      comparable: date.getTime(),
    }
  }
}

export default BlogIndexer
