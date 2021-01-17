import React from 'react'

import { useLayoutContext } from '../../context/layout'

function ContactFormToggle({ text }) {
  const { forms } = useLayoutContext()

  return <a onClick={forms.contact.toggle}>{text}</a>
}

export default ContactFormToggle
