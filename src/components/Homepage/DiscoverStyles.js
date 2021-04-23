import styled from '@emotion/styled'

export const DiscoverContainer = styled.div`
  background-color: hsl(358, 71%, 91%);
  height: 300px;
  display: grid;
  place-content: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 1rem;
  transform: translateY(-3rem);
`

export const ProductPhoto = styled.figure`
  padding: 28px;
  background-color: hsl(351, 81%, 94%);
  max-width: 340px;
  height: 460px;
`

export const GridNewsContainer = styled.div`
  padding: 28px;
  background-color: hsl(351, 81%, 94%);
  max-width: 340px;
  height: 460px;
`

export const NewsInnerContainer = styled.div`
  display: grid;
  justify-content: center;
  background-color: white;
`
