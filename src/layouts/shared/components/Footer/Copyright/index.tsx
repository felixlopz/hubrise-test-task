import * as React from "react"

import { Company, StyledCopyright, Logo, SocialLink, Contact, EmailLink, Container } from "./Styles"

import logo from "@assets/images/logo_footer.png"

const Copyright: React.FC = () => {
  const year = new Date(Date.now()).getFullYear()

  return (
    <StyledCopyright>
      <Container>
        <Company>&copy; {year} HubRise</Company>

        <Logo src={logo} alt="HubRise" />

        <Contact>
          <EmailLink to="mailto:contact@hubrise.com">contact@hubrise.com</EmailLink>
          <SocialLink to="https://www.linkedin.com/company/hubrise">
            <i className="fa fa-linkedin-square" />
          </SocialLink>
          <SocialLink to="https://twitter.com/HubRiseHQ">
            <i className="fa fa-twitter-square" />
          </SocialLink>
        </Contact>
      </Container>
    </StyledCopyright>
  )
}

export default Copyright