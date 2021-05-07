import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background-color: #fcc3c9;
  place-content: center;
  display: flex;
  ul {
    display: flex;
    flex-flow: row;
    margin: 0;
    list-style: none;
    li {
      padding: 0 0.5rem;
      margin: 0;
    }
    @media only screen and (max-width: 768px) {
      li:nth-of-type(2) {
        display: none;
      }
      li:nth-of-type(3) {
        display: none;
      }
    }
  }
`
