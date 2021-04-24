import React from 'react'
import Layout from '../../components/layout'
import { HeroGrid } from '../../components/Homepage/HeroStyles'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Uspgrid from '../../components/Homepage/UspGrid'
import Discover from '../../components/Homepage/Discover'
import People from '../../components/Homepage/People'
import Order from '../../components/Homepage/Order'

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
                  alt=""
                  // className="full-bleed header-image--height-big"
                  className="banner-image-div"
                />
              )}
              <button className="banner-text-div">
                <Link to={ctaLink}>{ctaText}</Link>
              </button>
            </HeroGrid>
          </div>
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
