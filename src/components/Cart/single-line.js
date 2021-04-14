import React, { useContext, useState } from 'react'
import StoreContext from '~/context/StoreContext'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { formatPrice } from '../../utils'
import { IoTrashOutline } from 'react-icons/io5'
import {
  Delete,
  NameContainer,
  NameQtyContainer,
  ProductRow,
  QtyAdjust,
  QtyAdjustContainer,
  QtyDeleteContainer,
} from './cartStyles'

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

  const variantPrice = product.variant.priceV2 ? (
    formatPrice(product.variant.priceV2.amount, product.variant.priceV2.currencyCode)
  ) : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, product.id)
  }
  // const [itemQty, setItemQty] = React.useState(product.quantity)

  // const productArray =
  //   addData && addData.prices.edges.map(item => item.node.product)
  // const matchedProduct =
  //   productArray && productArray.filter(item => item.id === product.id)
  // const singleImage =
  //   matchedProduct &&
  //   matchedProduct[0].localFiles[0].childImageSharp.gatsbyImageData
  // const singleName = matchedProduct && matchedProduct[0].name

  const subtractQuantityItem = basketItem => {
    updateLineItem(client, checkout.id, product.id, quantity - 1)
    setQuantity(quantity - 1)
  }
  const addQuantityItem = basketItem => {
    updateLineItem(client, checkout.id, product.id, quantity + 1)
    setQuantity(quantity + 1)
  }

  // let ProductPrice = product.price * product.quantity

  return (
    <ProductRow>
      {console.log(product)}
      <Link to={`/shop/${product.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <NameQtyContainer>
        <NameContainer>
          <p className="product-title">{product.title}</p>
        </NameContainer>
        <QtyDeleteContainer>
          <QtyAdjustContainer>
            <QtyAdjust onClick={() => subtractQuantityItem(product)}>
              <span className="qty-controls--cart">-</span>
            </QtyAdjust>
            <span className="qty-controls--cart">{quantity}</span>
            <QtyAdjust onClick={() => addQuantityItem(product)}>
              <span className="qty-controls--cart">+</span>
            </QtyAdjust>
          </QtyAdjustContainer>
          <Delete onClick={handleRemove}>
            <IoTrashOutline size={20} />
          </Delete>
        </QtyDeleteContainer>
      </NameQtyContainer>
      <p className="product-price--cart">
        {variantPrice}
      </p>
    </ProductRow>
  )
}

export default SingleLine
