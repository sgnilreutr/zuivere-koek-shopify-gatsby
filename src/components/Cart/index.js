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
import Cartnote from './cartNote'

const NO_ITEMS = 'Nog geen items in winkelmandje'
const BACK_TO_SHOP = 'Ga naar Shop'
// const SHIPPING_TEXT = 'Verzendkosten'
// const SHIPPING_FEE_TEXT = 'Berekend op volgende pagina'
const TOTAL_TEXT = 'Totaal winkelmand'
const MINIMUM_ORDER = 'Minimaal order bedrag is €11.00'
const BUTTON_TEXT = 'ik ga bestellen'

const Cart = ({ pageHeaderText, sections, isLoading }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const checkOutText = sections[0].text.text

  const [loading, setLoading] = useState(isLoading)

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
        <h1 className="page-title-alternative">{pageHeaderText}</h1>
        {lineItems}
        <HR />
        <CartBottomGrid>
          <small className="check-out--service-delivery">{checkOutText}</small>
          <TotalAndButton>
            {totalPrice && (
              <>
              <Total>
                <p className="check-out--ship-total">{TOTAL_TEXT}</p>
                <p className="check-out--ship-total text-align-right">
                  {totalPrice}
                </p>
                {parseFloat(checkout.totalPriceV2.amount) < 11.00 && <small className="check-out--ship-minimum">{MINIMUM_ORDER}</small>}
              </Total>
              {/* <Shipping>
                  <p className="check-out--ship-total">{SHIPPING_TEXT}</p>
                  <p className="check-out--ship-total">{SHIPPING_FEE_TEXT}</p>
              </Shipping> */}
              </>
            )}
            <OrderButton
              onClick={handleCheckout}
              disabled={loading || checkout.lineItems.length === 0 || parseFloat(checkout.totalPriceV2.amount) < 11.00}
            >
              <span className="check-out--checkout-button">{BUTTON_TEXT}</span>
            </OrderButton>
          </TotalAndButton>
        </CartBottomGrid>
      </CartInner>
      <Cartnote />
    </CartWrapper>
  )
}

export default Cart
