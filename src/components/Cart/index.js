import React, { useContext, useState } from 'react'
import StoreContext from '~/context/StoreContext'
import LinearProgress from '@material-ui/core/LinearProgress'
import SingleLine from './single-line'
import { formatPrice } from '../../utils'
import {
  CartBottomGrid,
  CartInner,
  CartLoader,
  CartRow,
  CartWrapper,
  HR,
  NoItemsButton,
  NoItemsContainer,
  OrderButton,
  Shipping,
  Total,
  TotalAndButton,
} from './cartStyles'

const NO_ITEMS = 'Nog geen items in winkelmandje'
const BACK_TO_SHOP = 'Ga naar Shop'
const CHECKOUT_TEXT =
  'Bezorging en service XXX besteld? XXXX in huis! Vragen? Je kunt ons mailen via: hallo@zuiverekoek.shop.nl'
// const SHIPPING_TEXT = 'Verzendkosten'
// const SHIPPING_FEE_TEXT = 'Worden op de volgende pagina berekend'
const TOTAL_TEXT = 'Totaal winkelmand'
const BUTTON_TEXT = 'ik ga bestellen'

const Cart = ({ pageText, isLoading }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const [loading, setLoading] = useState(isLoading)

  console.log(checkout)

  const lineItems = checkout.totalPrice ? (
    checkout.lineItems.length > 0 ? (
      checkout.lineItems.map((item, index) => (
        <CartRow key={index}>
          <SingleLine product={item} />
        </CartRow>
      ))
    ) : (
      <NoItemsContainer>
        <p className="landingpage-p">{NO_ITEMS}</p>
        <NoItemsButton to="/shop">
          <span>{BACK_TO_SHOP}</span>
        </NoItemsButton>
      </NoItemsContainer>
    )
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
      <CartInner>
        <h1 className="page-title-alternative">{pageText}</h1>
        {lineItems}
        <HR />
        <CartBottomGrid>
          <small className="check-out--service-delivery">{CHECKOUT_TEXT}</small>
          <TotalAndButton>
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
      </CartInner>
    </CartWrapper>
  )
}

export default Cart
