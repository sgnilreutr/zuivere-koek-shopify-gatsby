import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Products from '../../components/Products/Products'

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

const DiscoverContainer = styled.div`
  background-color: hsl(358, 71%, 91%);
`

const WhyContainer = styled.div``

const OverOnsWrapper = styled.div``

const OverOnsContent = styled.div``

const BlogWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    margin-top: 160px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
`

const Shop = props => {
  const {
    pageContext: {
      page: { pageHeaderText1, pageHeaderText2, pageHeaderImage },
    },
  } = props

//   const heroImage = {
//     img: hero.gatsbyImageData,
//     // alt: homepageACF.heroImage?.altText || ``,
//   }

  // const servicesImage = {
  //   img: homepageACF.servicesImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: homepageACF.servicesImage?.altText || ``,
  // }

  console.log(props.pageContext.page)

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
            <Products />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Shop
