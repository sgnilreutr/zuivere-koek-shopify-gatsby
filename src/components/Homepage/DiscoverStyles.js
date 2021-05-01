import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const DiscoverContainer = styled.div`
  background-color: hsl(358, 71%, 91%);
  height: 300px;
  display: grid;
  place-content: center;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 1rem;
  transform: translateY(-3rem);
  padding: 0 1rem;
  justify-items: center;
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    place-items: center;
  }
`

export const NoIpad = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
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
  justify-items: center;
  background-color: white;
  height: 100%;
  text-align: center;
  padding: 2rem;
`
export const DiscoverButton = styled(Link)`
  border: solid 1px hsl(0, 0%, 44%);
  border-radius: 4px;
  background-color: hsl(234, 47%, 31%);
  padding: 5px 35px;
  margin: 2rem 0;
  display: flex;
  cursor: pointer;
  max-width: max-content;
  height: max-content;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }

  span {
    color: #f8d8d9;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
  }
`
