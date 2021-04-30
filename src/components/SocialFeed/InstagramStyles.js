import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: column;
  place-items: center;
  .horizontal-menu {
    max-width: 1920px;
  }
`

export const SocialInfoContainer = styled(Link)`
  div {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 0.5rem;
  }
`
