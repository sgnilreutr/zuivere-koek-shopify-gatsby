import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  DiscoverButton,
  DiscoverContainer,
  Grid,
  GridNewsContainer,
  NewsInnerContainer,
  NoIpad,
  ProductPhoto,
} from './DiscoverStyles'

const Discover = ({ content }) => {
  const { name, columns } = content[0]

  const firstItem = columns && columns.length > 0 ? content[0].columns[0] : null
  const secondItem =
    columns && columns.length > 0 ? content[0].columns[1] : null
  const thirdItem = columns && columns.length > 0 ? content[0].columns[2] : null

  const GridImage = ({ image, alt }) => {
    return (
      <ProductPhoto>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={alt}
        />
      </ProductPhoto>
    )
  }

  const GridNews = ({ item }) => {
    return (
      <GridNewsContainer>
        <NewsInnerContainer>
          <p className="product-title">{item.title}</p>
          <p className="landingpage-p">{item.text.text}</p>
          <DiscoverButton to={`/${item.ctaLink}`}>
            <span>{item.ctaText}</span>
          </DiscoverButton>
        </NewsInnerContainer>
      </GridNewsContainer>
    )
  }

  return (
    <>
      <DiscoverContainer>
        <h2 className="block-header--blue">{name}</h2>
      </DiscoverContainer>
      <Grid>
        <GridImage image={firstItem.image} alt={firstItem.title} />
        <GridNews item={thirdItem} />
        <NoIpad>
          <GridImage image={secondItem.image} alt={secondItem.title} />
        </NoIpad>
      </Grid>
    </>
  )
}

export default Discover
