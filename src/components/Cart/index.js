import React, { useContext, useState } from "react"
import StoreContext from "~/context/StoreContext"
import { MdInfoOutline } from "react-icons/md"
import LinearProgress from "@material-ui/core/LinearProgress"
import SingleLine from "./single-line"
import { formatPrice } from "../../utils"
import {
  CartBottomGrid,
  CartInner,
  CartLoader,
  CartRow,
  CartWrapper,
  HR,
  MoreInfoButton,
  NoItemsButton,
  NoItemsContainer,
  OrderButton,
  Shipping,
  Total,
  TotalAndButton,
} from "./cartStyles"
import Cartnote from "./cartNote"
import ReactMarkdown from "react-markdown"

const NO_ITEMS = "Nog geen items in winkelmandje"
const BACK_TO_SHOP = "Ga naar Shop"
// const SHIPPING_TEXT = 'Verzendkosten'
const SHIPPING_FEE_TEXT = "Exclusief verzendkosten"
const SHIPPING_FEE_INFO_TEXT =
  "Tot en met 6 koeken betaal je €3,95 verzendkosten voor 7 koeken of meer betaal je €6,95 verzendkosten gratis verzending vanaf €40,-"
const TOTAL_TEXT = "Totaal winkelmand"
const MINIMUM_ORDER = "Minimaal een order van 4 koeken/fudge of 1 Minibox"
const BUTTON_TEXT = "ik ga bestellen"

const Cart = ({ pageHeaderText, sections, isLoading }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const checkOutText = sections[0].text.text
  const shippingInfoText = sections[1].text.text

  const [loading, setLoading] = useState(isLoading)
  const [showShippingInfo, setShowShippingInfo] = useState(false)

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

  const hasMinibox = checkout.lineItems.filter(item => {
    return /MINIBOX/gi.test(item.title)
  })

  const disabledSpecialAction = () => {
    if (
      hasMinibox.length === 0 &&
      checkout.lineItems.length > 0 &&
      parseFloat(checkout.totalPriceV2.amount) < 11.0
    ) {
      return true
    }
    if (hasMinibox.length > 0) {
      return false
    }
    if (
      checkout.lineItems.length > 0 &&
      parseFloat(checkout.totalPriceV2.amount) > 11.0
    ) {
      return false
    }
    if (checkout.lineItems.length === 0) {
      return true
    }
  }

  const totalPrice = checkout.totalPrice
    ? formatPrice(checkout.totalPrice, checkout.currencyCode)
    : null

  const handleCheckout = () => {
    window.open(checkout.webUrl, "_self")
  }

  const handleMoreInfo = () => {
    setShowShippingInfo(!showShippingInfo)
  }

  return (
    <CartWrapper>
      <CartInner>
        <h1 className="page-title-alternative">{pageHeaderText}</h1>
        {lineItems}
        <HR />
        <CartBottomGrid>
          <ReactMarkdown className="check-out--service-delivery">
            {checkOutText}
          </ReactMarkdown>
          <TotalAndButton>
            {totalPrice && (
              <>
                <Total>
                  <p className="check-out--ship-total">{TOTAL_TEXT}</p>
                  <p className="check-out--ship-total text-align-right">
                    {totalPrice}
                  </p>
                </Total>
                <Shipping>
                  {/* <p className="check-out--ship-total">{SHIPPING_TEXT}</p> */}
                  <p className="check-out--ship-total">{SHIPPING_FEE_TEXT}</p>
                  <MoreInfoButton onClick={handleMoreInfo}>
                    <p className="check-out--ship-total text-align-right">
                      <MdInfoOutline />
                    </p>
                  </MoreInfoButton>
                </Shipping>
                {/* {showShippingInfo && <small className="check-out--ship-minimum">{shippingInfoText}</small>} */}
                {showShippingInfo && (
                  <ReactMarkdown className="check-out--ship-minimum">
                    {shippingInfoText}
                  </ReactMarkdown>
                )}
                {parseFloat(checkout.totalPriceV2.amount) < 11.0 && (
                  <small className="check-out--ship-minimum">
                    {MINIMUM_ORDER}
                  </small>
                )}
              </>
            )}
            <OrderButton
              onClick={handleCheckout}
              disabled={loading || disabledSpecialAction()}
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
