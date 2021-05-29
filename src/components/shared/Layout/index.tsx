import * as React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { RootContext } from '../../../data/context'

export interface LayoutProps {
  children: React.ReactNode
  pageContext: RootContext
  path: string
}

const Layout = ({ children, pageContext, path }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header path={path} localeCode={pageContext.localeCode} />
      <main className="content">{children}</main>
      <Footer pageContext={pageContext} />
    </>
  )
}

export default Layout
