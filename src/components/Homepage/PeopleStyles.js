import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  background-color: hsl(234, 47%, 31%);
  height: 300px;
  display: grid;
  place-content: center;
`

export const ContentFlex = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  transform: translateY(-3rem);
  /* flex-wrap: auto; */
`

export const ImageContainer = styled.figure`
  width: 780px;
  height: 463px;
  margin-right: 6rem;
`

export const TextContainer = styled.div`
  width: 340px;
  height: 460px;
  padding: 3rem 2rem 2rem;
  background-color: hsl(351, 81%, 94%);
`

export const TextGrid = styled.div`
  display: grid;
  grid-template-rows: 270px 20px;

  p {
    font-size: 15px;
    color: white;

    strong {
      color: hsl(234, 47%, 31%);
    }
  }
`
