import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Uspgrid from '../../components/Homepage/UspGrid'
import Discover from '../../components/Homepage/Discover'
import People from '../../components/Homepage/People'
import Order from '../../components/Homepage/Order'

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
  console.log(sections)

  const DISCOVER_BLOCK_TITLE = 'ontdek onze Zuivere Koek'
  const DiscoverBlockData = sections.filter(
    item => item.name === DISCOVER_BLOCK_TITLE
  )

  const USP_BLOCK_TITLE = 'waarom zuiver&koek?'
  const UspGridData = sections.filter(item => item.name === USP_BLOCK_TITLE)

  const PEOPLE_BLOCK_TITLE = 'Tim & Ruth'
  const PeopleBlockData = sections.filter(
    item => item.name === PEOPLE_BLOCK_TITLE
  )

  const ORDER_BLOCK_TITLE = 'bestellen & genieten'
  const OrderBlockData = sections.filter(
    item => item.name === ORDER_BLOCK_TITLE
  )

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
          <div className="full-bleed">
            <Discover content={DiscoverBlockData} />
          </div>
          <div>
            <Uspgrid content={UspGridData} />
          </div>
          <div className="full-bleed">
            <People content={PeopleBlockData} />
          </div>
          <div className="full-bleed">
            <Order content={OrderBlockData} />
          </div>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default Homepage
