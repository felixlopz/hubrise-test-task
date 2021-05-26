import { graphql, useStaticQuery } from 'gatsby'

export interface SeoData {
  site: {
    siteMetadata: {
      title?: string
      description?: string
      author?: string
    }
  }
}

export function useSeoData(): SeoData {
  return useStaticQuery<SeoData>(graphql`
    query getSeoData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
}
