import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import {
  ContentGrid,
  HeaderContainer,
  ImageContainer,
  TextContainer,
  TextGrid,
} from './PeopleStyles'

const People = ({ content }) => {
  const { name, columns } = content[0]
  const imageData = columns[0]
  const textData = columns[1]

  const PeopleImage = ({ image, alt }) => {
    return image && alt ? (
      <ImageContainer>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={alt}
        />
      </ImageContainer>
    ) : null
  }

  const PeopleText = ({ text }) => {
    return text ? (
      <TextContainer>
        <TextGrid>
          <ReactMarkdown>{text.text}</ReactMarkdown>
        </TextGrid>
      </TextContainer>
    ) : null
  }

  return (
    <div>
      <HeaderContainer>
        <h2 className="page-title">{name}</h2>
      </HeaderContainer>
      <ContentGrid>
        <PeopleImage image={imageData.image} alt={imageData.title} />
        <PeopleText text={textData.text} />
      </ContentGrid>
    </div>
  )
}

export default People
