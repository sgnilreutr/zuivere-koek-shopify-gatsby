import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import {
  CellImage,
  CellText,
  Grid,
  GridCell,
  HeaderContainer,
  UspContainer,
} from './UspGridStyles'

const Uspgrid = ({ content }) => {
  const { name, columns } = content[0]

  const GridImage = ({ image, alt }) => {
    return image && alt ? (
      <CellImage>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={alt}
          className="usp-image--small"
        />
      </CellImage>
    ) : null
  }

  const grid =
    columns && columns.length > 0 ? (
      columns.map((item, index) => (
        <GridCell key={index}>
          <GridImage image={item.uspImage} alt={item.title} />
          <CellText>
            <h5 className="usp-header">{item.title}</h5> <br />{' '}
            <p className="usp-body text_small">{item.text.text}</p>
          </CellText>
        </GridCell>
      ))
    ) : (
      <p>{ERROR_MESSAGE}.</p>
    )

  return (
    <UspContainer>
      <HeaderContainer>
        <h2 className="page-title">{name}</h2>
      </HeaderContainer>
      <Grid>{grid}</Grid>
    </UspContainer>
  )
}

export default Uspgrid
