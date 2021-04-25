import styled from '@emotion/styled'

export const Banner = styled.div`
  background-color: hsl(234, 47%, 31%);
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 50%;
  padding: 1rem 0 5rem;
  display: flex;
  place-content: center;
  @media only screen and (max-width: 767px) {
    max-width: 100%;
    text-align: center;
  }
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-column-gap: 2rem;
  max-width: 65%;
  margin: 0 auto;
  transform: translateY(-3rem);
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    max-width: 100%;
    place-items: center;
  }
`
