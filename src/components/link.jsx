import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Link as GatsbyLink } from 'gatsby'

const locales = require('../i18n/locales')

const newTabProps = {
  target: `_blank`,
  rel: `noopener noreferrer`
}

const Link = ({ to: initialTo, children, newTab, ...other }) => {
  const {
    i18n: { language }
  } = useTranslation()

  if (!initialTo) return ''

  const leadsToInternalPage = initialTo.startsWith(`/`)
  const leadsToDashboard = initialTo.includes(`manager.hubrise.com`)
  const isAnchorWithinCurrentPage = initialTo.startsWith(`#`)
  const locale = locales.find(({ code }) => code === language)
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
    return (
      <a
        href={to}
        {...(newTab && !isAnchorWithinCurrentPage && newTabProps)}
        {...other}
      >
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  newTab: PropTypes.bool
}

Link.defaultProps = {
  children: <></>,
  newTab: true
}

export default Link
