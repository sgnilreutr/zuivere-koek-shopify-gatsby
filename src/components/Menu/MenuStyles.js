import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const MenuWrapper = styled.nav`
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
