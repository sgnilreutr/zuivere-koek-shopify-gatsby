import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  CellImage,
  CellText,
  DataCell,
  Grid,
  OrderWrapper,
} from './OrderStyles'

const Order = ({ content }) => {
  const { name, columns } = content[0]
  console.log(content)

  const GridImage = ({ image, alt }) => {
    return image && alt ? (
      <CellImage>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={alt}
        />
      </CellImage>
    ) : null
  }

  const grid =
    columns && columns.length > 0 ? (
      columns.map((item, index) => (
        <DataCell key={index}>
          <GridImage image={item.uspImage} alt={item.title} />
          <CellText>
            <h5 className="order-body--header">{item.title}</h5> <br />{' '}
            <p className="usp-body text_small">{item.text.text}</p>
          </CellText>
        </DataCell>
      ))
    ) : (
      <p>Something went wrong.</p>
    )

  return (
    <OrderWrapper>
      <h2 className="order-header">{name}</h2>
      <Grid>{grid}</Grid>
    </OrderWrapper>
  )
}

export default Order
