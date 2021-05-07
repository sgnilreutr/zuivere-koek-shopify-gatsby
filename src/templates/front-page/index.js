import React from 'react'
import Layout from '../../components/layout'
import { ERROR_MESSAGE } from '../../utils'
import { GoToShopButton, HeroGrid } from '../../components/Homepage/HeroStyles'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Uspgrid from '../../components/Homepage/UspGrid'
import Discover from '../../components/Homepage/Discover'
import People from '../../components/Homepage/People'
import Order from '../../components/Homepage/Order'
import Instagram from '../../components/SocialFeed/Instagram'

const Homepage = props => {
  const {
    pageContext: {
      page,
      page: {
        hero: { ctaLink, ctaText, image, text },
        sections,
      },
    },
  } = props

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
    alt: 'hero-image'
  }

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          <div className="full-bleed">
            <HeroGrid>
              {heroImageFile?.img && (
                <GatsbyImage
                  image={heroImageFile.img}
                  alt={heroImageFile.alt}
                  className="banner-image-div"
                />
              )}
              <div className="banner-text-div">
                <h1 className="hero-title">{text.text}</h1>
                <GoToShopButton to={ctaLink}>
                  <span>{ctaText}</span>
                </GoToShopButton>
              </div>
            </HeroGrid>
          </div>
          <div className="full-bleed">
            <Discover content={DiscoverBlockData} />
          </div>
          <div>
            <Uspgrid content={UspGridData} />
          </div>
          <div className="full-bleed" style={{ paddingBottom: `5rem` }}>
            <People content={PeopleBlockData} />
          </div>
          <div className="full-bleed">
            <Order content={OrderBlockData} />
          </div>
          <div className="full-bleed">
            <Instagram />
          </div>
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default Homepage
