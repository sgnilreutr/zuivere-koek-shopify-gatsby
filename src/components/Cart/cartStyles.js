import styled from '@emotion/styled'

export const CartWrapper = styled.div`
  background-color: hsl(351, 81%, 94%);
  padding: 5% 20%;
`

export const CartRow = styled.div`
  margin: 2rem 0;
`

export const NameQtyContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 2rem;
`

export const NameContainer = styled.div`
  max-width: 190px;
`

export const QtyDeleteContainer = styled.div`
  display: flex;
  align-items: center;
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

export const Delete = styled.span`
  display: flex;
  cursor: pointer;
  margin-left: 1rem;
  color: hsl(234, 47%, 31%);
`

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 132px auto auto;
  align-items: center;
`

export const HR = styled.div`
  border: solid 1px hsl(0, 0%, 44%);
`

export const CartBottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const TotalAndButton = styled.div`
  display: flex;
  flex-flow: column;
`

export const Shipping = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export const Total = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export const OrderButton = styled.button`
  border-radius: 4px;
  border: solid 1px hsl(0, 0%, 44%);
  background-color: hsl(234, 47%, 31%);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`