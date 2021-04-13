import React from 'react'
import { HeaderTextContainer } from '../../../styles/globalStyles'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = ({ hero }) => {
  const heroImageFile = {
    img: hero.pageHeaderImage?.localFile.childImageSharp.gatsbyImageData,
    // alt: homepageACF.heroImage?.altText || ``,
  }

  return (
    <>
      {hero ? (
        <div className="full-bleed">
          {heroImageFile?.img && (
            <GatsbyImage
              image={heroImageFile.img}
              alt=""
              className="header-image--no-constrained header-image--height full-bleed"
            />
          )}
          <HeaderTextContainer>
            <h1 className="page-title-alternative">{parse(hero.pageTitle)}</h1>
          </HeaderTextContainer>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </>
  )
}

export default Hero
