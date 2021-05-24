import * as React from 'react'
import { WrapRootElementBrowserArgs } from 'gatsby'
import * as Sentry from '@sentry/react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../src/i18n'
import { LayoutProvider } from '../../src/context/layout'

export const wrapRootElement = ({
  element
}: WrapRootElementBrowserArgs): React.ReactNode => (
  <Sentry.ErrorBoundary fallback={'An error has occurred'}>
    <I18nextProvider i18n={i18n}>
      <LayoutProvider>{element}</LayoutProvider>
    </I18nextProvider>
  </Sentry.ErrorBoundary>
)
