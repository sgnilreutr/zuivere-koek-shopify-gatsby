import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'

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

const Homepage = props => {
  const {
    pageContext: {
      page: {
        title,
        uri,
        hero,
        heroHeader,
        reasonHeader,
        introductionHeader,
        duurzaamImage,
        duurzaamHeader,
        duurzaamBody,
        metLiefdeImage,
        metLiefdeHeader,
        metLiefdeBody,
        opBestellingImage,
        opBestellingHeader,
        opBestellingBody,
        lowImpactHeader,
        lowImpactBody,
        lowImpactImage,
        transparantImage,
        transparantHeader,
        transparantBody,
        verassingImage,
        verassingHeader,
        verassingBody,
      },
    },
  } = props

  const heroImage = {
    img: hero.gatsbyImageData,
    // alt: homepageACF.heroImage?.altText || ``,
  }

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
          {heroImage?.img && (
            <GatsbyImage
              image={heroImage.img}
              alt=""
              className="hero-image full-bleed"
            />
          )}
          <DiscoverContainer className="full-bleed">
            <h2>{parse(introductionHeader)}</h2>
          </DiscoverContainer>
          <WhyContainer>
            <h2>{parse(reasonHeader)}</h2>
            <div>
              <div>
                <GatsbyImage image={duurzaamImage} alt="" className="" />
                <div>
                  <h3>{parse(duurzaamHeader)}</h3>
                </div>
                <div>
                  <h3>{parse(metLiefdeHeader)}</h3>
                </div>
                <div>
                  <h3>{parse(opBestellingHeader)}</h3>
                </div>
                <div>
                  <h3>{parse(lowImpactHeader)}</h3>
                </div>
                <div>
                  <h3>{parse(transparantHeader)}</h3>
                </div>
                <div>
                  <h3>{parse(verassingHeader)}</h3>
                </div>
              </div>
            </div>
          </WhyContainer>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage
