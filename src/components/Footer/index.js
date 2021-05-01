import React from 'react'
import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser'
import {
  FooterContainer,
  FooterWrapper,
  LeftFooter,
  MenuItem,
  MenuWrapper,
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
    footerMenu && footerMenu.length > 0
      ? footerMenu.map((item, index) => (
          <MenuItem key={index} to={item.navigationLink}>
            <span>{parse(item.navigationTitle)}</span>
          </MenuItem>
        ))
      : null

  return (
    <FooterWrapper>
      <FooterContainer>
        <Link to="/" className="footer-link">
          <GatsbyImage
            image={footerImage.img}
            alt=""
            className="footer-image--height"
          />
        </Link>
        <LeftFooter>
          <ReactMarkdown style={{ color: 'white' }}>
            {footerDetailsLeft.footerDetailsLeft}
          </ReactMarkdown>
        </LeftFooter>
        <RightFooter>
          <ReactMarkdown>{footerDetailsRight.footerDetailsRight}</ReactMarkdown>
        </RightFooter>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

//backup
// {
//   footer: contentfulFooter {
//     logo {
//       localFile {
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//     footerMenu {
//       navigationLink
//       navigationTitle
//     }
//     footerDetailsRight {
//       footerDetailsRight
//     }
//     footerDetailsLeft {
//       footerDetailsLeft
//     }
//   }
// }
