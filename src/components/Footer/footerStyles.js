import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const FooterWrapper = styled.footer`
  background-color: hsl(234, 47%, 31%);
  /* position: relative; */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 6rem 0;
`

export const FooterContainer = styled.div`
margin: 0 auto;
max-width: 83.4rem;
display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 10%;
`

export const LeftFooter = styled.div`
text-align: right;
`

export const RightFooter = styled.div``

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
