import { graphql, useStaticQuery } from 'gatsby'

export interface PageWrapperData {
  site: {
    siteMetadata: {
      recaptchaSiteKey: string
      contactMessageUrl: string
    }
  }
}

export function usePageWrapperData(): PageWrapperData {
  return useStaticQuery<PageWrapperData>(graphql`
    query pageWrapperData {
      site {
        siteMetadata {
          recaptchaSiteKey
          contactMessageUrl
        }
      }
    }
  `)
}
