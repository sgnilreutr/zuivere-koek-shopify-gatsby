import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const CartWrapper = styled.div`
  background-color: hsl(351, 81%, 94%);
  padding: 5% 20%;
  margin: 5% 0;
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    grid-column: 1 / 4;
  }
`

export const CartInner = styled.div`
  max-width: 1000px;
  margin: 5% auto;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
`

export const CartLoader = styled.div`
  padding: 10%;
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
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 2rem auto 0;
  max-width: 900px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: none;
  }
`

export const TotalAndButton = styled.div`
  display: flex;
  flex-flow: column;
`

export const Shipping = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4rem;
`

export const Total = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4rem;
`

export const OrderButton = styled.button`
  border-radius: 4px;
  border: solid 1px hsl(0, 0%, 44%);
  background-color: hsl(234, 47%, 31%);
  cursor: pointer;
  max-width: 320px;
  display: inline-grid;
  place-self: center;
  padding: 0.1rem 3rem;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const NoItemsContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
  display: grid;
  justify-items: center;
`

export const NoItemsButton = styled(Link)`
  border: solid 1px hsl(350, 64.6%, 69%);
  border-radius: 4px;
  background-color: hsl(350.5, 80%, 78.4%);
  padding: 5px 35px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  max-width: max-content;

  :hover {
    opacity: 0.8;
  }

  span {
    color: #2a3174;
    text-decoration: none;
    font-family: 'Playfair Display', serif;
  }
`

export const NoteField = styled.form`
  display: flex;
  flex-flow: column;
  max-width: 70%;
  input {
    min-height: 100px;
    min-width: 280px;
    margin-bottom: 1rem;
  }
`

export const NoteButton = styled.button`
  border-radius: 4px;
  border: solid 1px hsl(0, 0%, 44%);
  background-color: hsl(234, 47%, 31%);
  cursor: pointer;
  max-width: 320px;
  margin-top: 1rem;
  /* display: inline-grid;
  place-self: center; */
  padding: 0.1rem 3rem;

  &:hover {
    opacity: 0.7;
  }
`

export const ConfirmMessage = styled.span`
  opacity: ${(props) => (props.success ? 1 : 0)};
  transition: opacity 0.6s;
  display: flex;
  flex-flow: row;
  align-items: center;
`

export const MoreInfoButton = styled.div`
  cursor: pointer;
`