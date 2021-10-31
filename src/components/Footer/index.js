import React from "react"
import styled from "styled-components"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"
import { DiScala } from "react-icons/di"
import { Link } from "gatsby"

const FooterContainer = styled.div`
  background: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;

  @media screen and (max-width: 820px) {
    height: auto;
    padding: 1rem 0;
  }
`
const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 2px auto;

  & > * {
    flex-basis: 25%;
    margin: 0 !important;
  }

  small {
    text-align: center;
    @media screen and (max-width: 820px) {
      margin-bottom: 1.5rem !important;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    margin-bottom: 1.5rem !important;
  }
`
const SocialIcon = styled(DiScala)`
  margin-right: 10px;
`
const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: "Ubuntu", sans-serif;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>
            <SocialIcon />
            EXPLOR
          </SocialLogo>
          <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twiiter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
