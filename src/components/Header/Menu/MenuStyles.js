import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const MenuWrapper = styled.nav`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  flex: 1;
`
export const InnerMenuWrapper = styled.nav`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  flex: 1;
`

export const MenuItem = styled(Link)`
  color: hsl(351, 81%, 94%);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem;
`

export const NoLinkMenuItem = styled.div`
  color: hsl(351, 81%, 94%);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  place-content: center;
`

export const OpenIcon = styled.div`
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
