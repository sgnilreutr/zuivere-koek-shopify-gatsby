import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import { ImageWrapper, Paragraph, Wrapper } from './landingStyles'
import Column from './Column'

const LandingPage = ({ page }) => {
  const ContentCreator = ({ content }) => {
    if (content.text) {
      return (
        <Paragraph>
          <p className="landingpage-p">{content.text.text}</p>
        </Paragraph>
      )
    } else if (content.image) {
      return (
        <ImageWrapper>
          <GatsbyImage
            image={content.image.localFile.childImageSharp.gatsbyImageData}
            alt={content.title}
          />
        </ImageWrapper>
      )
    }

    return null
  }

  const pageContent =
    page && page.length > 0 ? (
      page.map((item, index) => <ContentCreator key={index} content={item} />)
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )

  return (
    <Wrapper>{page ? <>{pageContent}</> : <div>{ERROR_MESSAGE}</div>}</Wrapper>
  )
}

export default LandingPage
