import React from 'react'
import { WrapPageElementBrowserArgs } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Modal from '../Modal'
import Layout from '../Layout'
import ContactForm from '../ContactForm'
import { useLayoutContext } from '../../context/layout'
import ToastProvider from '../toast'
import { usePageWrapperData } from './graphql'
import { BaseContext } from '../../data/context'

interface PageWrapperProps {
  children: React.ReactNode
  props: WrapPageElementBrowserArgs['props']
}

const PageWrapper = ({ children, props }: PageWrapperProps): JSX.Element => {
  const siteMetadata = usePageWrapperData().site.siteMetadata

  const { t, i18n } = useTranslation()
  const { forms } = useLayoutContext()

  const pageContext = props.pageContext as BaseContext
  const path = props.path

  const isSSR = typeof window === 'undefined'
  if (isSSR) i18n.changeLanguage(pageContext.lang)

  return (
    <ToastProvider>
      <Helmet>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${siteMetadata.recaptchaSiteKey}`}
        />
      </Helmet>

      <Layout pageContext={pageContext} path={path}>
        {children}
      </Layout>

      {forms.contact.isVisible && (
        <Modal
          title={t(`forms.contact.modal_title`)}
          onClose={forms.contact.toggle}
        >
          <ContactForm
            recaptchaSiteKey={siteMetadata.recaptchaSiteKey}
            contactMessageUrl={siteMetadata.contactMessageUrl}
          />
        </Modal>
      )}
    </ToastProvider>
  )
}

export default PageWrapper
