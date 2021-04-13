import React from 'react'
import { Wrapper } from './heroStyles'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = ({ hero }) => {
  const heroImageFile = {
    img: hero.pageHeaderImage?.localFile.childImageSharp.gatsbyImageData,
    // alt: homepageACF.heroImage?.altText || ``,
  }

  console.log(hero)

  return (
    <Wrapper>
      {hero ? (
        <div className="full-bleed">
          {heroImageFile?.img && (
            <GatsbyImage
              image={heroImageFile.img}
              alt=""
              className="hero-image full-bleed"
            />
          )}
          <h1 className="page-title-alternative">{parse(hero.pageTitle)}</h1>
        </div>
      ) : (
        <div>Something went wrong</div>
      )}
    </Wrapper>
  )
}

export default Hero
