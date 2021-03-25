import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Link from './link'
import { generateKey, getLanguageFromAbsolutePath } from './utils'
import logo from '../images/logo_footer.png'

const Footer = ({ pageContext }) => {
  const menuFooterNodes = useStaticQuery(footerQuery).allFile.nodes
  const menuSections = menuFooterNodes.find(
    ({ absolutePath }) =>
      getLanguageFromAbsolutePath(absolutePath) === pageContext.lang
  ).childYaml.parsedContent.sections

  return (
    <footer className="footer">
      <div className="footer__nav-wrapper">
        <div className="footer__nav footer-nav">
          {menuSections.map((section, idx) => (
            <FooterSection key={idx} {...section} />
          ))}
        </div>
        <ScrollUpButton />
      </div>
      <Copyright />
    </footer>
  )
}

const FooterSection = ({ title, links }) => (
  <div className="footer-nav__section">
    <div className="footer-nav__header">{title}</div>
    <ul className="footer-nav__list">
      {links.map(({ title, to }, idx) => (
        <li key={generateKey(title, idx)} className="footer-nav__item">
          <Link to={to} className="footer-nav__item-link">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Copyright = () => (
  <div className="footer__copyright-wrapper">
    <div className="footer__copyright footer-copyright">
      <div className="footer-copyright__company">
        &copy; {new Date(Date.now()).getFullYear()} HubRise
      </div>
      <div className="footer-copyright__logo">
        <img src={logo} alt="HubRise" />
      </div>
      <div className="footer-copyright__contact">
        <Link
          className="footer-copyright__contact__email"
          to="mailto:contact@hubrise.com"
        >
          contact@hubrise.com
        </Link>
        <Link
          className="footer-copyright__contact__linkedin"
          to="https://www.linkedin.com/company/hubrise"
        >
          <i className="fa fa-linkedin-square" />
        </Link>
        <Link
          className="footer-copyright__contact__twitter"
          to="https://twitter.com/HubRiseHQ"
        >
          <i className="fa fa-twitter-square" />
        </Link>
      </div>
    </div>
  </div>
)

const ScrollUpButton = () => (
  <button
    className="footer__scroll-up"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <i className="fa fa-angle-up" />
  </button>
)

const footerQuery = graphql`
  query getFooterData {
    allFile(filter: { base: { eq: "menu-footer.yaml" } }) {
      nodes {
        absolutePath
        childYaml {
          parsedContent
        }
      }
    }
  }
`

export default Footer
