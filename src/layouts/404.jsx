import React from 'react'

import SEO from '../components/seo'
import { useTranslation } from 'react-i18next'
import Link from '../components/link'

import image404 from '../images/404.png'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('layout.404.meta.title')} />

      <div className="page-404">
        <h1 className="page-404__title">{t('layout.404.title')}</h1>
        <Link to="/" className="page-404__link">
          {t('layout.404.text_link')}
        </Link>

        <img className="page-404__image" alt="404 not found" src={image404} />
      </div>
    </>
  )
}

export default NotFoundPage
