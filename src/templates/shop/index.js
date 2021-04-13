import React from 'react'
import Layout from '../../components/layout'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Products from '../../components/Products/Products'
import { HeaderTextContainer } from '../../styles/globalStyles'
import Toaster from '../../components/Toaster'

const Shop = props => {
  const {
    pageContext: {
      page: { pageHeaderText, pageHeaderImage },
    },
  } = props

  const headerImage = {
    img: pageHeaderImage.localFile?.childImageSharp?.gatsbyImageData,
    // alt: homepageACF.heroImage?.altText || ``,
  }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          {headerImage?.img && (
            <GatsbyImage
              image={headerImage.img}
              alt=""
              className="header-image--height full-bleed"
            />
          )}
          <HeaderTextContainer>
            <h1 className="page-title page-title--shop">
              {parse(pageHeaderText)}
            </h1>
          </HeaderTextContainer>
          <Products />
          <Toaster />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Shop
