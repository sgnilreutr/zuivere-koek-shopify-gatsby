import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const ProductCardWrapper = styled.div`
  width: 340px;
  display: grid;
  justify-content: center;
  transition: box-shadow .15s ease-in-out,transform .15s ease-in-out;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 30px -5px rgba(0,0,0,.2);
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

export const ProductInnerInfo = styled(Link)`
    text-align: center;
    text-decoration: none;
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
