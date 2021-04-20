import React, { useContext, useState } from 'react'
import StoreContext from '~/context/StoreContext'
import LinearProgress from '@material-ui/core/LinearProgress'
// import { useStaticQuery, graphql } from 'gatsby'
import SingleLine from './single-line'
import { formatPrice } from '../../utils'
import {
  CartBottomGrid,
  CartLoader,
  CartRow,
  CartWrapper,
  HR,
  OrderButton,
  Shipping,
  Total,
  TotalAndButton,
} from './cartStyles'

const CHECKOUT_TEXT =
  'Bezorging en service XXX besteld? XXXX in huis! Vragen? Je kunt ons mailen via: tim@zuiverekoek-shop.nl ruth@zuiverekoek-shop.nl'
const SHIPPING_TEXT = 'Verzendkosten'
const SHIPPING_FEE_TEXT = 'Worden op de volgende pagina berekend'
const TOTAL_TEXT = 'Totaalbedrag winkelwagen'
const BUTTON_TEXT = 'ik ga bestellen'

const Cart = ({ pageText, isLoading }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const [loading, setLoading] = useState(isLoading)

  const lineItems = checkout.totalPrice ? (
    checkout.lineItems.map((item, index) => (
      <CartRow key={index}>
        <SingleLine product={item} />
      </CartRow>
    ))
  ) : (
    <CartLoader>
      <LinearProgress />
    </CartLoader>
  )

  const totalPrice = checkout.totalPrice
    ? formatPrice(checkout.totalPrice, checkout.currencyCode)
    : null

  const handleCheckout = () => {
    window.open(checkout.webUrl, '_self')
  }

  return (
    <CartWrapper>
      {/* {console.log(checkout)} */}
      <h1 className="page-title-alternative">{pageText}</h1>
      {lineItems}
      <HR />
      <CartBottomGrid>
        <small className="check-out--service-delivery">{CHECKOUT_TEXT}</small>
        <TotalAndButton>
          <Shipping>
            <p className="check-out--ship-total">{SHIPPING_TEXT}</p>
            <p className="check-out--ship-total text-align-right">
              {SHIPPING_FEE_TEXT}
            </p>
          </Shipping>
          {totalPrice && (
            <Total>
              <p className="check-out--ship-total">{TOTAL_TEXT}</p>
              <p className="check-out--ship-total text-align-right">
                {totalPrice}
              </p>
            </Total>
          )}
          <OrderButton
            onClick={handleCheckout}
            disabled={loading || checkout.lineItems.length === 0}
          >
            <span className="check-out--checkout-button">{BUTTON_TEXT}</span>
          </OrderButton>
        </TotalAndButton>
      </CartBottomGrid>
    </CartWrapper>
  )
}

export default Cart
