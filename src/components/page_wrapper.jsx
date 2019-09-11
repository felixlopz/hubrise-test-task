import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import ContactForm from './forms/contact'
import Modal from '../components/modal'
import Layout from './layout'
import Seo from './seo'

import { getLanguage } from '../i18n/utils'

import { useLayoutContext } from '../context/layout'

const PageWrapper = ({ element, props }) => {
  const language = getLanguage(props.path)
  const { forms } = useLayoutContext()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language)
    }
  }, [i18n, language])

  return (
    <>
      <Seo lang={i18n.language} />
      <Layout {...props}>
        {element}
      </Layout>
      {forms.contact.isVisible && (
        <Modal
          title={t(`forms.contact.modal_title`)}
          onClose={forms.contact.toggle}
        >
          <ContactForm />
        </Modal>
      )}
    </>
  )
}

PageWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
}

export default PageWrapper
