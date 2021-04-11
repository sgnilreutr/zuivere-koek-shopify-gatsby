import React from 'react'
import { connect } from 'react-redux'
import getStripe from '../../utils/stripejs'
import { useStaticQuery, graphql } from 'gatsby'
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

const Cart = ({ basketItems, dispatch, isLoading, total }) => {
  const [loading, setLoading] = React.useState(isLoading)

  const cartData = useStaticQuery(graphql`
    query ProductPricesCart {
      prices: allStripePrice(filter: { active: { eq: true } }) {
        edges {
          node {
            id
            active
            product {
              id
              name
              localFiles {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  // const productImageData = productData && productData.prices.edges.filter(item => item.node.product.id === basketItems.map(item => item.id))

  // console.log(productImageData)

  // console.log(productData.prices.edges)
  // console.log(productData.prices.edges[0].node.product.id)
  // console.log(basketItems.map(item => item.id))

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
      successUrl: `${window.location.origin}/thank-you/`,
      cancelUrl: `${window.location.origin}/shop`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <CartWrapper>
      {basketItems.length > 0 &&
        cartData &&
        basketItems.map((basketItem, index) => (
          <CartRow id={index}>
            <SingleLine product={basketItem} addData={cartData} />
          </CartRow>
        ))}
      <HR />
      <CartBottomGrid>
        <small className="check-out--service-delivery">{CHECKOUT_TEXT}</small>
        <TotalAndButton>
          <Shipping>
            <p className="check-out--ship-total">{SHIPPING_TEXT}</p>
            <p className="check-out--ship-total text-align-right">{SHIPPING_FEE_TEXT}</p>
          </Shipping>
          <Total>
            <p className="check-out--ship-total">{TOTAL_TEXT}</p>
            <p className="check-out--ship-total text-align-right">
              {basketItems.length > 0 &&
                formatPrice(total, basketItems[0].currency)}
            </p>
          </Total>
          <OrderButton
            onClick={() => checkoutBasket(basketItems)}
            disabled={loading || basketItems.length < 1}
          >
            <span className="check-out--checkout-button">{BUTTON_TEXT}</span>
          </OrderButton>
        </TotalAndButton>
      </CartBottomGrid>
    </CartWrapper>
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
