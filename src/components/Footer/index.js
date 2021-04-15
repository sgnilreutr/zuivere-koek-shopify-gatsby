import React from 'react'
import parse from 'html-react-parser'
import {
  FooterContainer,
  FooterWrapper,
  LeftFooter,
  MenuItem,
  MenuWrapper,
  RightFooter,
} from './footerStyles'
import { useStaticQuery, graphql } from 'gatsby'
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
          navigationLink
          navigationTitle
        }
        footerDetailsRight {
          footerDetailsRight
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
    footerDetailsRight,
    footerDetailsLeft,
  } = FooterData.footer

  const footerImage = {
    img: logo.localFile?.childImageSharp?.gatsbyImageData,
  }

  const menu =
    footerMenu.length > 0
      ? footerMenu.map((item, index) => (
          <MenuItem key={index} to={item.navigationLink}>
            <span>{parse(item.navigationTitle)}</span>
          </MenuItem>
        ))
      : null

  return (
    <FooterWrapper>
      <FooterContainer>
        <GatsbyImage
          image={footerImage.img}
          alt=""
          className="footer-image--height"
        />
        <LeftFooter>
          <p className="footer-text">
            {parse(footerDetailsLeft.footerDetailsLeft)}
          </p>
        </LeftFooter>
        <RightFooter>
          <p className="footer-text">
            {parse(footerDetailsRight.footerDetailsRight)}
          </p>
        </RightFooter>
        <MenuWrapper>{menu}</MenuWrapper>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
