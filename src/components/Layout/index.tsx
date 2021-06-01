import * as React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { RootContext } from '@utils/context'

export interface LayoutProps {
  children: React.ReactNode
  pageContext: RootContext
  path: string
}

const Layout = ({ children, pageContext, path }: LayoutProps): JSX.Element => {
  const { languagePaths, localeCode } = pageContext

  return (
    <>
      <Header
        path={path}
        languagePaths={languagePaths}
        localeCode={localeCode}
      />
      <main className="content">{children}</main>
      <Footer pageContext={pageContext} />
    </>
  )
}

export default Layout
