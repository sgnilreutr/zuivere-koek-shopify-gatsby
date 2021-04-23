import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    margin-bottom: 5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 2.5rem;
`

export const GridCell = styled.div`
  display: grid;
  grid-template-columns: 110px 360px;
  grid-column-gap: 1rem;
`

export const CellText = styled.div`
  display: flex;
  flex-flow: column;
`
