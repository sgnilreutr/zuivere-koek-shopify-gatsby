import React from 'react'
import { HeaderTextContainer } from '../../../styles/globalStyles'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = ({ hero }) => {
  const { title, pageHeaderText, pageHeaderSubtext, header_image } = hero

  const heroImageFile = {
    img: header_image?.localFile.childImageSharp.gatsbyImageData,
    alt: title || ``,
  }

  return (
    <>
      {hero ? (
        <div className="full-bleed">
          {heroImageFile?.img && (
            <GatsbyImage
              image={heroImageFile.img}
              alt={heroImageFile.alt}
              className="header-image--no-constrained header-image--height-small full-bleed"
            />
          )}
          <HeaderTextContainer>
            <h1 className="page-title page-title--shop">
              {pageHeaderText} <br />
              <span>{pageHeaderSubtext}</span>
            </h1>
          </HeaderTextContainer>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </>
  )
}

export default Hero
