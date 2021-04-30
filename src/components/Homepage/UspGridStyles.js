import styled from '@emotion/styled'

export const UspContainer = styled.div`
  @media only screen and (max-width: 767px) {
    margin: 0 2rem;
  }
`

export const HeaderContainer = styled.div`
  margin-bottom: 5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 2.5rem;
  padding-bottom: 6rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1.5rem;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    grid-gap: 1rem;
  }
`

export const GridCell = styled.div`
  display: grid;
  grid-template-columns: 110px 360px;
  grid-column-gap: 1rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 110px 200px;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    grid-template-rows: auto auto;
  }
`

export const CellText = styled.div`
  display: flex;
  flex-flow: column;
`

export const CellImage = styled.figure`
  display: grid;
  place-self: center;
`
