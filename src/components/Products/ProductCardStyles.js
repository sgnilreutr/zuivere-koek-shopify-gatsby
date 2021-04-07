import styled from '@emotion/styled'

export const ProductCardWrapper = styled.div`
  width: 340px;
  display: grid;
  justify-content: center;
  transition: ease-in-out 0.4s;

  &:hover {
    transform: translateY(-0.3rem);
  }
`

export const ProductPhoto = styled.figure`
  padding: 28px;
  background-color: hsl(351, 81%, 94%);
`

export const ProductInfo = styled.div`
  display: grid;
  justify-items: center;
`

export const AddToCart = styled.button`
  margin-top: 1rem;
  border: solid 1px hsl(0, 0%, 44%);
  border-radius: 4px;
  background-color: hsl(234, 47%, 31%);
  padding: 5px 35px;
  display: flex;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
