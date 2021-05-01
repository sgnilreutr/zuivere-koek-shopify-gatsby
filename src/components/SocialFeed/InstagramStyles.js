import styled from '@emotion/styled'

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: column;
  place-items: center;
  .horizontal-menu {
    max-width: 1920px;
  }
  @media only screen and (max-width: 1920px) {
    .horizontal-menu {
    max-width: 100%;
  }
  }
`

export const SocialInfoContainer = styled.div`
  div {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 0.5rem;
  }
`
