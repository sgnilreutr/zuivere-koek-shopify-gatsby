import styled from '@emotion/styled'

export const OrderWrapper = styled.div`
  background-color: hsl(358, 71%, 91%);
  display: grid;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 1rem;
`

export const DataCell = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
