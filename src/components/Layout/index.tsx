"use client"

import Script from "next/script"
import * as React from "react"

import CommonClientStyles from "@components/CommonClientStyles"
import ContentHotReload from "@components/ContentHotReload"
import { ClientConfiguration, LayoutContextProvider } from "@components/LayoutContext"
import LayoutForms from "@components/LayoutForms"
import ToastProvider from "@components/Toast"
import { Language } from "@utils/locales"

import { Main } from "./Styles"

interface LayoutProps {
  clientConfiguration: ClientConfiguration
  language: Language
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const Layout = ({ clientConfiguration, language, header, footer, children }: LayoutProps): JSX.Element => {
  return (
    <LayoutContextProvider clientConfiguration={clientConfiguration} language={language}>
      <ToastProvider>
        {process.env.NODE_ENV === "development" && <ContentHotReload />}

        <Script src={`https://www.google.com/recaptcha/api.js?render=${clientConfiguration.RECAPTCHA_SITE_KEY}`} />
        <CommonClientStyles />

        {
          /* In dev mode, an annoying "Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element"
           warning is emitted on every page change, because the first element of the page (the header below) is sticky.
           This warning was introduced by https://github.com/vercel/next.js/pull/53873 */
          process.env.NODE_ENV === "development" && <div />
        }

        {header}
        <Main>{children}</Main>
        {footer}

        <LayoutForms />
      </ToastProvider>
    </LayoutContextProvider>
  )
}

export default Layout
