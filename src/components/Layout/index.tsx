import * as React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { BaseContext } from '../../data/context'

export interface LayoutProps {
  children: React.ReactNode
  pageContext: BaseContext
  path: string
}

const Layout = ({ children, pageContext, path }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header path={path} localeCode={pageContext.lang} />
      <main className="content">{children}</main>
      <Footer pageContext={pageContext} />
    </>
  )
}

export default Layout
