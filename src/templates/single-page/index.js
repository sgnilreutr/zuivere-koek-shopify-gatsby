import React from 'react'
import { isEmpty } from 'lodash'
import { ERROR_MESSAGE } from '../../utils'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import LandingPage from '../../components/Landing'
import Hero from '../../components/Landing/Hero'

const PageTemplate = ({ data }) => {
  const {
    contentfulLandingPage: { internalName, hero, sections },
  } = data

  return (
    <Layout>
      {!isEmpty(data) ? (
        <>
          <Hero hero={hero} />
          <LandingPage page={sections} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
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
