import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import { ImageWrapper, Paragraph, Wrapper } from './landingStyles'
import ReactMarkdown from 'react-markdown'

const LandingPage = ({ page }) => {
  const ContentCreator = ({ content }) => {
    if (content.text) {
      return (
        <Paragraph>
          <ReactMarkdown className="landingpage-p">
            {content.text.text}
          </ReactMarkdown>
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
