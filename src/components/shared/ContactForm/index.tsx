import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import * as yup from 'yup'

import Form from './form'
import { useToast } from '../../toast'
import { useLayoutContext } from '../../../context/layout'

interface ContactFormProps {
  recaptchaSiteKey?: string
  contactMessageUrl: string
}

const ContactForm = ({
  recaptchaSiteKey,
  contactMessageUrl
}: ContactFormProps): JSX.Element => {
  const { forms } = useLayoutContext()
  const toast = useToast()
  const { t } = useTranslation()

  function onSubmit(values, { setSubmitting }) {
    ;(window as any).grecaptcha // TODO: do we still use grecaptcha? Cannot see a captcha in the contact form
      .execute(recaptchaSiteKey, { action: 'send_email' })
      .then((token) => {
        // Use application/x-www-form-urlencoded content type (instead of application/json)
        // to skip CORS preflight check, which has not been implemented on the server side.
        return fetch(contactMessageUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: encodeFormData({
            name: values.name,
            email: values.email,
            message: values.message,
            recaptchaResponse: token
          })
        })
          .then((response) => {
            if (response.ok) {
              toast({
                variant: 'success',
                title: t('misc.success'),
                text: t('misc.messages.email_send_success')
              })
              forms.contact.toggle()
              console.log('Message sent successfully')
            } else {
              throw new Error(`${response.statusText}`)
            }
          })
          .catch((error) => {
            toast({
              variant: 'error',
              title: t('misc.failure'),
              text: t('misc.messages.email_send_failure')
            })
            console.error(error)
            console.error('Message sending failed')
            setSubmitting(false)
          })
      })
  }

  return (
    <Formik
      initialValues={{
        name: ``,
        email: ``,
        message: ``
      }}
      validationSchema={createContactSchema(t)}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form
          buttonText={t(`forms.contact.button`)}
          buttonClasses={[`form__button_full-width`, `form__button_modal`]}
          formProps={{
            id: `contact-us__form`,
            classNames: [`form form_modal`]
          }}
          structure={formikStructure}
          t={t}
          formikProps={formikProps}
        />
      )}
    </Formik>
  )
}

export default ContactForm

const createContactSchema = (t) => {
  const nameMinLength = 2
  const messageMinLength = 10

  return yup.object().shape({
    name: yup
      .string()
      .min(nameMinLength, t(`forms.validation.min`, { length: nameMinLength })),
    email: yup
      .string()
      .email(t(`forms.validation.email`))
      .required(t(`forms.validation.email_required`)),
    message: yup
      .string()
      .min(
        messageMinLength,
        t(`forms.validation.message_min`, { length: messageMinLength })
      )
      .required(t(`forms.validation.message_required`))
  })
}

const encodeFormData = (params) => {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    })
    .join('&')
}

const formikStructure = {
  formId: `contact`,
  sections: [
    {
      rows: [
        {
          fields: [
            {
              id: `name`,
              name: `name`,
              type: `text`,
              component: `input`
            },
            {
              id: `email`,
              name: `email`,
              type: `email`,
              component: `input`
            }
          ]
        },
        {
          fields: [
            {
              id: `message`,
              name: `message`,
              component: `textarea`
            }
          ]
        }
      ]
    }
  ]
}
