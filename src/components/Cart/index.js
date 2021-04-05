import React from 'react'
import { connect } from 'react-redux'

import { addItemBasket, removeItemBasket } from '../../store/app'
import SingleLine from './single-line'
import { IoTrashOutline } from 'react-icons/io5'
import styled from '@emotion/styled'

const REMOVE_TEXT = 'Verwijder'

const CartRow = styled.div`
  display: grid;
  grid-template-columns: auto 70px;
  align-items: center;
`

const Delete = styled.span`
  display: flex;
  cursor: pointer;
`

const Cart = ({ basketItems, dispatch }) => {
  const removeItem = basketItem => {
    console.log('Remove item', basketItem)
    dispatch(removeItemBasket(basketItem))
  }

  // console.log(basketItems)
  return (
    <div>
      {basketItems.length > 0 &&
        basketItems.map((basketItem, index) => (
          <CartRow id={index}>
            <SingleLine product={basketItem} />
            <Delete onClick={() => removeItem(basketItem)}>
              <small>{REMOVE_TEXT}</small> <IoTrashOutline />
            </Delete>
          </CartRow>
        ))}
    </div>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(Cart)
