import styled from '@emotion/styled'

export const ProductWrapper = styled.div`
  margin-top: 10%;
  background-color: hsl(351, 81%, 94%);
  display: flex;
  flex-flow: row;
  padding: 2rem;
`

export const ProductImage = styled.div`
  width: 307px;
`

export const ProductDesc = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 2%;
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