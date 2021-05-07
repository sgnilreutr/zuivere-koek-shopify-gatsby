import React from 'react'
import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser'
import {
  FooterContainer,
  FooterWrapper,
  LeftFooter,
  MenuItem,
  MenuWrapper,
  PoweredByFooter,
  RightFooter,
} from './footerStyles'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Footer = () => {
  const FooterData = useStaticQuery(graphql`
    {
      footer: contentfulFooter {
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        footerMenu {
          navLink
          navName
        }
        footerDetailsLeft {
          footerDetailsLeft
        }
      }
    }
  `)
  const {
    footerMenu,
    logo,
    footerDetailsLeft,
  } = FooterData.footer

  const footerImage = {
    img: logo.localFile?.childImageSharp?.gatsbyImageData,
    alt: 'Zuiver&Koek'
  }

  const menu =
    footerMenu && footerMenu.length > 0
      ? footerMenu.map((item, index) => (
          <MenuItem key={index} to={item.navLink}>
            <span>{parse(item.navName)}</span>
          </MenuItem>
        ))
      : null

  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to="/" className="footer-link">
          <GatsbyImage
            image={footerImage.img}
            alt={footerImage.alt}
            className="footer-image--height"
          />
        </Link>
        <LeftFooter>
          <ReactMarkdown style={{ color: 'white' }}>
            {footerDetailsLeft.footerDetailsLeft}
          </ReactMarkdown>
        </LeftFooter>
        <MenuWrapper>{menu}</MenuWrapper>
      </FooterContainer>
      <PoweredByFooter>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robberttuerlings">Code by Robbert Tuerlings</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruth-mollema-218083ba/">Design by Ruth Mollema</a>
      </PoweredByFooter>
    </FooterWrapper>
  )
}

export default Footer
