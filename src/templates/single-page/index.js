import React from 'react'
import { isEmpty } from 'lodash'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import { HeaderTextContainer } from '../../styles/globalStyles'
import LandingPage from '../../components/Landing'
import Hero from '../../components/Landing/Hero'

const PageTemplate = ({ data }) => {
  // console.log(data)

  const {
    contentfulLandingPage: { internalName, hero, sections },
  } = data

  console.log(sections)

  //   const headerImage = {
  //     img: header_image.localFile?.childImageSharp?.gatsbyImageData,
  //     // alt: homepageACF.heroImage?.altText || ``,
  //   }

  return (
    <Layout>
      {!isEmpty(data) ? (
        <>
          <Hero hero={hero} />
          {/* {headerImage?.img && (
            <GatsbyImage
              image={headerImage.img}
              alt=""
              className="header-image--height-small full-bleed"
            />
          )}
          <HeaderTextContainer>
            <h1 className="page-title page-title--shop">
              {pageHeaderText} <br />
              <span>{pageHeaderSubtext}</span>
            </h1>
          </HeaderTextContainer> */}
          <LandingPage page={sections} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    contentfulLandingPage(id: { eq: $id }) {
      internalName
      hero {
        ... on ContentfulComponentContentpageHeader {
          id
          title
          pageHeaderText
          pageHeaderSubtext
          header_image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      sections {
        ... on ContentfulComponentText {
          id
          title
          text {
            text
          }
        }
        ... on ContentfulComponentImage {
          id
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default PageTemplate
