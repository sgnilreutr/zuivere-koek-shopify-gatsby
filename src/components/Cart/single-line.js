import React, { useContext, useState } from "react"
import StoreContext from "~/context/StoreContext"
import { Link } from "gatsby"
import { formatPrice } from "../../utils"
import { IoTrashOutline } from "react-icons/io5"
import {
  Delete,
  NameContainer,
  NameQtyContainer,
  ProductRow,
  QtyAdjust,
  QtyAdjustContainer,
  QtyDeleteContainer,
} from "./cartStyles"

const SingleLine = ({ product }) => {
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(product.quantity)

  const variantImage = product.variant.image ? (
    <img
      src={product.variant.image.src}
      alt={`${product.title} product shot`}
      className="cart-image--height"
    />
  ) : null

  const variantPrice = product.variant.priceV2
    ? formatPrice(
        product.variant.priceV2.amount * product.quantity,
        product.variant.priceV2.currencyCode
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, product.id)
  }

  const subtractQuantityItem = () => {
    updateLineItem(client, checkout.id, product.id, quantity - 1)
    setQuantity(currQuantity => currQuantity - 1)
  }
  const addQuantityItem = () => {
    updateLineItem(client, checkout.id, product.id, quantity + 1)
    setQuantity(currQuantity => currQuantity + 1)
  }

  return (
    <ProductRow>
      <Link to={`/shop/${product.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <NameQtyContainer>
        <NameContainer>
          <p className="product-title">{product.title}</p>
        </NameContainer>
        <QtyDeleteContainer>
          <QtyAdjustContainer>
            <QtyAdjust onClick={subtractQuantityItem}>
              <span className="qty-controls--cart">-</span>
            </QtyAdjust>
            <span className="qty-controls--cart">{quantity}</span>
            <QtyAdjust onClick={addQuantityItem}>
              <span className="qty-controls--cart">+</span>
            </QtyAdjust>
          </QtyAdjustContainer>
          <Delete onClick={handleRemove}>
            <IoTrashOutline size={20} />
          </Delete>
        </QtyDeleteContainer>
      </NameQtyContainer>
      <p className="product-price--cart">{variantPrice}</p>
    </ProductRow>
  )
}

export default SingleLine
