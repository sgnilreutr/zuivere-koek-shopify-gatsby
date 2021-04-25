import styled from '@emotion/styled'

export const ProductWrapper = styled.div`
  background-color: hsl(351, 81%, 94%);
  display: grid;
  padding: 2rem;
  max-width: 70%;
  margin: 10% auto;
  grid-template-rows: auto auto;
  @media only screen and (max-width: 767px) {
    max-width: 100%;
    margin: 10% 2rem;
  }
`

export const ProductInner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 1rem;
  @media only screen and (max-width: 767px) {
    grid-template-columns: none;
    row-gap: 1rem;
  }
`

export const ProductImage = styled.div`
  /* width: 579.2px; */
`

export const ProductContentful = styled.div`
  margin-top: 2rem;
  max-width: 50%;
  * {
    color: #2a3174;
  }
  @media only screen and (max-width: 767px) {
    max-width: 100%;
  }
`
export const ProductDesc = styled.div`
  display: flex;
  flex-flow: column;
  /* margin-left: 2%; */
`

export const QtyAdjustContainer = styled.div`
  border: solid 4px hsl(231, 42%, 35%);
  background-color: hsl(0, 0%, 100%);
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  max-width: 90px;
  align-items: center;
  justify-items: center;
  user-select: none;
`

export const QtyAdjust = styled.div`
  cursor: pointer;
`

export const AddToCart = styled.div`
  display: grid;
  justify-items: center;
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
