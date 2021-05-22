import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'

import locales from '../utils/locales'

interface LinkProps {
  to: string
  children?: ReactNode
  newTab?: boolean
  [K: string]: any
}

const Link = ({
  to: initialTo,
  children = <></>,
  newTab = true,
  ...other
}: LinkProps): JSX.Element => {
  const {
    i18n: { language }
  } = useTranslation()

  if (!initialTo) return <></>

  const leadsToInternalPage = initialTo.startsWith(`/`)
  const leadsToDashboard = initialTo.includes(`manager.hubrise.com`)
  const isAnchorWithinCurrentPage = initialTo.startsWith(`#`)
  const locale = locales.find(({ code }) => code === language) || locales[0]
  const isDefaultLanguage = locale.default
  const queryString = `?locale=${locale.tag}`
  const to = initialTo + (leadsToDashboard ? queryString : ``)

  if (leadsToInternalPage) {
    return (
      <GatsbyLink to={isDefaultLanguage ? to : `/${language}${to}`} {...other}>
        {children}
      </GatsbyLink>
    )
  } else {
    let newTabProps = {}
    if (newTab && !isAnchorWithinCurrentPage) {
      newTabProps = {
        target: `_blank`,
        rel: `noopener noreferrer`
      }
    }

    return (
      <a href={to} {...newTabProps} {...other}>
        {children}
      </a>
    )
  }
}

export default Link
