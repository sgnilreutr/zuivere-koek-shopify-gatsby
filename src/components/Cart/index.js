import React from 'react'
import { connect } from 'react-redux'
import getStripe from '../../utils/stripejs'

import { removeItemBasket } from '../../store/app'
import SingleLine from './single-line'
import { IoTrashOutline } from 'react-icons/io5'
import styled from '@emotion/styled'
import { formatPrice } from '../../utils'

const REMOVE_TEXT = 'Verwijder'
const CHECKOUT_TEXT = 'Verder naar bestellen'

const CartRow = styled.div`
  display: grid;
  grid-template-columns: auto 70px;
  align-items: center;
`

const Delete = styled.span`
  display: flex;
  cursor: pointer;
`

const Cart = ({ basketItems, dispatch, useSelector, total }) => {
//    const isLoading = useSelector((state) => state.isLoading)

  const removeItem = basketItem => {
    dispatch(removeItemBasket(basketItem))
  }
    
    const checkoutBasket = async (basketItems) => {
        // isLoading(true)
        const lineItems = basketItems.map((item) => ({price: item.priceID, quantity: item.quantity}))
        console.log('lineItems', lineItems)
        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
          mode: 'payment',
          lineItems: lineItems,
          successUrl: `${window.location.origin}/shop/`,
          cancelUrl: `${window.location.origin}/shop`,
        })

        // if (error) {
        //   console.warn('Error:', error)
        //   isLoading(false)
        // }
    }

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
          <p>Estimated Total
            {basketItems.length > 0 && formatPrice(total, basketItems[0].currency)}
          </p>
          <div onClick={() => checkoutBasket(basketItems)}><p>{CHECKOUT_TEXT}</p></div>
    </div>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
    total: state.app.total,
  }),
  null
)(Cart)
