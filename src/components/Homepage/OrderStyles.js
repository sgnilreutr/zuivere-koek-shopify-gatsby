import styled from '@emotion/styled'

export const OrderWrapper = styled.div`
  background-color: hsl(358, 71%, 91%);
  display: grid;
  h2 {
    margin: 0 2rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 5%;
  padding: 3rem 0;
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    grid-gap: 1rem;
  }
`

export const DataCell = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2.5rem;
  /* grid-template-rows: 110px 360px 100px;
  grid-column-gap: 1rem; */
`

export const CellImage = styled.figure`
  width: 57.8px;
  height: 83px;
`

export const CellText = styled.div`
  display: flex;
  flex-flow: column;
`
