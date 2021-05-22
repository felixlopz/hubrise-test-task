import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import HeaderMobile from './header_mobile'
import Footer from './footer'
import { getLocaleCodeFromAbsolutePath } from '../utils/locales'

const Layout = ({ children, pageContext, path }) => {
  const menuHeaderNodes = useStaticQuery(headerQuery).allFile.nodes
  const menuItems = menuHeaderNodes.find(
    ({ absolutePath }) =>
      getLocaleCodeFromAbsolutePath(absolutePath) === pageContext.lang
  ).childYaml.parsedContent

  return (
    <>
      <Header menuItems={menuItems} path={path} />
      <HeaderMobile menuItems={menuItems} path={path} />

      <main className="content">{children}</main>

      <Footer pageContext={pageContext} />
    </>
  )
}

const headerQuery = graphql`
  query getHeaderData {
    allFile(filter: { base: { eq: "menu-header.yaml" } }) {
      nodes {
        absolutePath
        childYaml {
          parsedContent
        }
      }
    }
  }
`

export default Layout
