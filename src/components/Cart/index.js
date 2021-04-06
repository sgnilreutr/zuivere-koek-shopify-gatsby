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

const Cart = ({ basketItems, dispatch, isLoading, total }) => {
  const [loading, setLoading] = React.useState(isLoading)

  const removeItem = basketItem => {
    dispatch(removeItemBasket(basketItem))
  }

  const checkoutBasket = async basketItems => {
    setLoading(true)
    const lineItems = basketItems.map(item => ({
      price: item.priceID,
      quantity: item.quantity,
    }))
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: lineItems,
      successUrl: `${window.location.origin}/shop/`,
      cancelUrl: `${window.location.origin}/shop`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
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
      <p>
        Estimated Total
        {basketItems.length > 0 && formatPrice(total, basketItems[0].currency)}
      </p>
      <button
        onClick={() => checkoutBasket(basketItems)}
        disabled={loading || basketItems.length < 1}
      >
        <p>{CHECKOUT_TEXT}</p>
      </button>
    </div>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
    total: state.app.total,
    isLoading: state.app.isLoading,
  }),
  null
)(Cart)
