import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  DiscoverContainer,
  Grid,
  GridNewsContainer,
  NewsInnerContainer,
  ProductPhoto,
} from './DiscoverStyles'

const Discover = ({ content }) => {
  const { name, columns } = content[0]

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
    console.log(item)
    return (
      <GridNewsContainer>
        <NewsInnerContainer>
          <p>{item.title}</p>
          <p>{item.text.text}</p>
        </NewsInnerContainer>
      </GridNewsContainer>
    )
  }

  const grid =
    columns && columns.length > 0 ? (
      columns.map((item, index) =>
        item.image ? (
          <GridImage image={item.image} alt={item.title} key={index} />
        ) : (
          <GridNews item={item} key={index} />
        )
      )
    ) : (
      <p>Something went wrong.</p>
    )

  return (
    <>
      <DiscoverContainer>
        <h2 className="page-title">{name}</h2>
      </DiscoverContainer>
      <Grid>{grid}</Grid>
    </>
  )
}

export default Discover
