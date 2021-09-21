import * as React from "react"

import Copyright from "./Copyright"
import ScrollUpButton from "./ScrollUpButton"
import FooterSection from "./FooterSection"
import { useFooterData } from "./graphql"

import { getLocaleCodeFromAbsolutePath, useLocaleCode } from "@utils/locales"

const Footer: React.FC = (): JSX.Element => {
  const localeCode = useLocaleCode()

  const footerData = useFooterData()
  const footerNodeInLocale = footerData.allFile.nodes.find(
    ({ absolutePath }) => getLocaleCodeFromAbsolutePath(absolutePath) === localeCode,
  )
  if (!footerNodeInLocale) throw `menu-footer.yaml not defined for locale ${localeCode}`

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
