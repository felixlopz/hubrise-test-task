import * as React from 'react'

import { getLocaleCodeFromAbsolutePath } from '../../../utils/locales'
import { BaseContext } from '../../../data/context'
import Copyright from './Copyright'
import ScrollUpButton from './ScrollUpButton'
import FooterSection from './FooterSection'
import { useFooterData } from './graphql'

export interface FooterProps {
  pageContext: BaseContext
}

const Footer = ({ pageContext }: FooterProps): JSX.Element => {
  const footerData = useFooterData()
  const footerNodeInLocale = footerData.allFile.nodes.find(
    ({ absolutePath }) =>
      getLocaleCodeFromAbsolutePath(absolutePath) === pageContext.lang
  )
  if (!footerNodeInLocale)
    throw `menu-footer.yaml not defined for locale ${pageContext.lang}`

  const sections = footerNodeInLocale.childYaml.parsedContent.sections

  return (
    <footer className="footer">
      <div className="footer__nav-wrapper">
        <div className="footer__nav footer-nav">
          {sections.map((section, idx) => (
            <FooterSection key={idx} {...section} />
          ))}
        </div>

        <ScrollUpButton />
      </div>

      <Copyright />
    </footer>
  )
}

export default Footer
