import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { CellText, Grid, GridCell, HeaderContainer } from './UspGridStyles'

const Uspgrid = ({ content }) => {
  const { id, name, columns } = content[0]

  const GridImage = ({image, alt}) => {
    return <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={alt} />
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
      <p>Something went wrong.</p>
    )

  return (
    <>
      <HeaderContainer>
        <h3 className="page-title">{name}</h3>
      </HeaderContainer>
      <Grid>{grid}</Grid>
    </>
  )
}

export default Uspgrid
