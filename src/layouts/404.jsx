import React from 'react'

import SEO from '../components/seo'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('layout.404.meta.title')} />
      <h1>{t('layout.404.title')}</h1>
      <p>{t('layout.404.text')}</p>
    </>
  )
}

export default NotFoundPage
