import ContactForm from "@components/ContactForm"
import { useLayoutContext } from "@components/LayoutContext"
import Modal from "@components/Modal"
import useTranslation from "@hooks/client/useTranslation"

const LayoutForms = (): JSX.Element => {
  const { t } = useTranslation()
  const { forms, clientConfiguration } = useLayoutContext()

  return (
    <>
      {forms.contact.isVisible && (
        <Modal title={t(`forms.contact.modal_title`)} onClose={forms.contact.toggle}>
          <ContactForm
            recaptchaSiteKey={clientConfiguration.RECAPTCHA_SITE_KEY}
            contactMessageUrl={clientConfiguration.CONTACT_MESSAGE_URL}
          />
        </Modal>
      )}
    </>
  )
}

export default LayoutForms
