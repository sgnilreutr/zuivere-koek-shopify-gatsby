import styled from '@emotion/styled'

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  transform: translateY(-3rem);
`
