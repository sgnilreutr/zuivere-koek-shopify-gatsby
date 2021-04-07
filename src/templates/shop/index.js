import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Products from '../../components/Products/Products'
import { HeaderTextContainer } from '../../styles/globalStyles'

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

const Shop = props => {
  const {
    pageContext: {
      page: { pageHeaderText1, pageHeaderText2, pageHeaderImage },
    },
  } = props

  console.log(props.pageContext)

  //   const heroImage = {
  //     img: hero.gatsbyImageData,
  //     // alt: homepageACF.heroImage?.altText || ``,
  //   }

  // const servicesImage = {
  //   img: homepageACF.servicesImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: homepageACF.servicesImage?.altText || ``,
  // }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          {/* {heroImage?.img && (
            <GatsbyImage
              image={heroImage.img}
              alt=""
              className="hero-image full-bleed"
            />
          )} */}
          <HeaderTextContainer>
            <h1 className="page-title page-title--shop">
              {parse(pageHeaderText1)}
            </h1>
          </HeaderTextContainer>
          <Products />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Shop
