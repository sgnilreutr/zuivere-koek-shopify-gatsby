import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const ProductCardWrapper = styled.div`
  width: 340px;
  display: grid;
  justify-content: center;
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  background-color: white;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 30px -5px rgba(0, 0, 0, 0.2);
  }
`

export const ProductPhoto = styled.figure`
  padding: 28px;
  background-color: hsl(351, 81%, 94%);
`

export const ProductInfoContainer = styled(Link)`
  width: 340px;
  height: 460px;
  padding: 1.5rem;
  background-color: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  background-color: hsl(351, 81%, 94%);
  text-decoration: none;
  /* box-shadow: 0px 7px 10px rgba(black, 0.5); */
  &:hover {
    /* transform: translateY(20px); */
    &:before {
      opacity: 1;
    }
    div {
      opacity: 1;
      transform: translateY(0px);
    }
    figure {
      opacity: 0.3;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    /* display: block; */
    width: 100%;
    height: 100%;
    /* border-radius: 15px; */
    /* background-color: rgba(black, 0.6); */
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ProductInfoContent = styled.div`
  position: relative;
  z-index: 3;
  top: -60px;
  color: hsl(234, 47%, 31%);
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;
  text-align: center;
`

export const ProductInfo = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 2rem;
`

export const ProductInnerInfo = styled(Link)`
  text-align: center;
  text-decoration: none;
`

export const AddToCartButton = styled.button`
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
