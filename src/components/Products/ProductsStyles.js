import styled from '@emotion/styled'

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  transform: translateY(-3rem);
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1370px) and (min-width: 1024px) {
    grid-template-columns: repeat(2, 340px);
    margin: 0 auto;
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 340px);
    margin: 0 auto;
  }
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
  }
`
