import React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import SEO from '../../components/seo'
import Products from '../../components/Products/Products'
import { HeaderTextContainer } from '../../styles/globalStyles'
import Toaster from '../../components/Toaster'
import Instagram from '../../components/SocialFeed/Instagram'

const Shop = props => {
  const {
    pageContext: {
      page: { pageHeaderText, pageHeaderSubtext, header_image },
    },
  } = props

  const headerImage = {
    img: header_image.localFile?.childImageSharp?.gatsbyImageData,
    alt: 'Shop header',
  }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          {headerImage?.img && (
            <GatsbyImage
              image={headerImage.img}
              alt={headerImage.alt}
              className="header-image--height-small full-bleed"
            />
          )}
          <HeaderTextContainer>
            <h1 className="page-title page-title--shop">
              {pageHeaderText} <br />
              <span>{pageHeaderSubtext}</span>
            </h1>
          </HeaderTextContainer>
          <Products />
          <Toaster />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
      <div className="full-bleed">
        <Instagram />
      </div>
    </Layout>
  )
}

export default Shop
