import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { I18nextProvider } from 'react-i18next'
import * as Sentry from '@sentry/react'

import {
  CallSummaryTable,
  ContactFormToggle,
  HighlightCode,
  InlineImage,
  Label
} from '../../src/components/markdown'
import Link from '../../src/components/link'
import { LayoutProvider } from '../../src/context/layout'
import i18n from '../../src/i18n'
import { generateHeaders } from '../../src/components/utils/headers'

let components = {
  ...generateHeaders([`h2`, `h3`]),
  a: ({ href, ...other }) => <Link to={href} {...other} />,
  table: (tableProps) => (
    <div className="table-container">
      <table {...tableProps} />
    </div>
  ),
  pre: ({ children: { props } }) => (
    <HighlightCode
      language={props.className && props.className.split(`-`)[1]}
      code={props.children}
    />
  ),
  CallSummaryTable,
  Label,
  ContactFormToggle,
  InlineImage,
  Link
}

export const wrapRootElement = ({ element }) => {
  return (
    <Sentry.ErrorBoundary fallback={'An error has occurred'}>
      <I18nextProvider i18n={i18n}>
        <LayoutProvider>
          <MDXProvider components={components}>{element}</MDXProvider>
        </LayoutProvider>
      </I18nextProvider>
    </Sentry.ErrorBoundary>
  )
}
