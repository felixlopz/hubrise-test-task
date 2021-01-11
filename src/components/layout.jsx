import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'
import HeaderMobile from './header_mobile'
import Footer from './footer'
import { getLanguageFromAbsolutePath } from './utils'

const Layout = ({ children, ...other }) => {
  const menuHeaderNodes = useStaticQuery(headerQuery).allFile.nodes
  const menuItems = menuHeaderNodes.find(
    ({ absolutePath }) =>
      getLanguageFromAbsolutePath(absolutePath) === other.pageContext.lang
  ).childYaml.parsedContent

  return (
    <>
      <Header {...other} menuItems={menuItems} />
      <HeaderMobile menuItems={menuItems} />

      <main className="content" data-floater-content>
        {children}
      </main>

      <Footer {...other} />
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
