import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const FooterWrapper = styled.footer`
  background-color: hsl(234, 47%, 31%);
  /* position: relative; */
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 6rem 0;
  @media only screen and (max-width: 1024px) {
    padding: 2rem 0;
  }
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 83.4rem;
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-column-gap: 10%;
  p {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    place-items: center;
  }
`

export const LeftFooter = styled.div`
  color: white;
  text-align: right;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const RightFooter = styled.div`
  color: white;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const MenuWrapper = styled.nav`
  display: grid;
  grid-template-rows: repeat(3, auto);
  margin-right: 1rem;
`

export const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 0.7;
  }
`
