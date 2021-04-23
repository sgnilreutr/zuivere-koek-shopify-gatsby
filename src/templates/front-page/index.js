import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Uspgrid from '../../components/Homepage/UspGrid'

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
      page,
      page: {
        title,
        hero: { ctaLink, ctaText, image, text },
        sections,
      },
    },
  } = props

  console.log(props.pageContext.page)
  console.log(sections[0].name)

  const heroImageFile = {
    img:
      props.pageContext.page.hero?.image.localFile.childImageSharp
        .gatsbyImageData,
    // alt: homepageACF.heroImage?.altText || ``,
  }

  // const servicesImage = {
  //   img: homepageACF.servicesImage?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: homepageACF.servicesImage?.altText || ``,
  // }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          {heroImageFile?.img && (
            <GatsbyImage
              image={heroImageFile.img}
              alt=""
              className="full-bleed"
            />
          )}
          {/* <DiscoverContainer className="full-bleed">
            <h2 className="page-title">{parse(introductionHeader)}</h2>
          </DiscoverContainer> */}
          <WhyContainer>
            <Uspgrid content={sections} />
          </WhyContainer>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage
