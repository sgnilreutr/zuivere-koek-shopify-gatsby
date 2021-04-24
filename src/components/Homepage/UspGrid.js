import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ERROR_MESSAGE } from '../../utils'
import { CellText, Grid, GridCell, HeaderContainer } from './UspGridStyles'

const Uspgrid = ({ content }) => {
  const { name, columns } = content[0]

  const GridImage = ({ image, alt }) => {
    return image && alt ? (
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={alt}
      />
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
    <>
      <HeaderContainer>
        <h2 className="page-title">{name}</h2>
      </HeaderContainer>
      <Grid>{grid}</Grid>
    </>
  )
}

export default Uspgrid
