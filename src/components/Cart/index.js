import React, { useContext, useState } from 'react'
import StoreContext from '~/context/StoreContext'
// import { useStaticQuery, graphql } from 'gatsby'
import SingleLine from './single-line'
import { formatPrice } from '../../utils'
import {
  CartBottomGrid,
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
const SHIPPING_FEE_TEXT = 'Gratis'
const TOTAL_TEXT = 'Totaalbedrag'
const BUTTON_TEXT = 'ik ga bestellen'

const Cart = ({ pageText, isLoading }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const [loading, setLoading] = useState(isLoading)

  // const cartData = useStaticQuery(graphql`
  //   query ProductPricesCart {
  //     prices: allStripePrice(filter: { active: { eq: true } }) {
  //       edges {
  //         node {
  //           id
  //           active
  //           product {
  //             id
  //             name
  //             localFiles {
  //               childImageSharp {
  //                 gatsbyImageData
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const checkoutBasket = async basketItems => {
  //   setLoading(true)
  //   const lineItems = basketItems.map(item => ({
  //     price: item.priceID,
  //     quantity: item.quantity,
  //   }))
  //   const stripe = await getStripe()
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: 'payment',
  //     lineItems: lineItems,
  //     successUrl: `${window.location.origin}/thank-you/`,
  //     cancelUrl: `${window.location.origin}/cart`,
  //   })

  //   if (error) {
  //     console.warn('Error:', error)
  //     setLoading(false)
  //   }
  // }

    return (
      <CartWrapper>
        <h1 className="page-title-alternative">{pageText}</h1>
        {checkout &&
          checkout.lineItems.map((item, index) => (
            <CartRow key={index}>
              <SingleLine product={item} />
            </CartRow>
          ))}
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
            <Total>
              <p className="check-out--ship-total">{TOTAL_TEXT}</p>
              {/* <p className="check-out--ship-total text-align-right">
                  {formatPrice(total, basketItems[0].currency)}
              </p> */}
            </Total>
            <OrderButton
              // onClick={() => checkoutBasket(basketItems)}
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
