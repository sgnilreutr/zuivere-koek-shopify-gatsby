import React from 'react'
import { connect } from 'react-redux'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  addQuantity,
  removeItemBasket,
  subtractQuantity,
} from '../../store/app'
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

const SingleLine = ({ product, addData, dispatch }) => {
  const [itemQty, setItemQty] = React.useState(product.quantity)

  const productArray =
    addData && addData.prices.edges.map(item => item.node.product)
  const matchedProduct =
    productArray && productArray.filter(item => item.id === product.id)
  const singleImage =
    matchedProduct &&
    matchedProduct[0].localFiles[0].childImageSharp.gatsbyImageData
  const singleName = matchedProduct && matchedProduct[0].name

  const subtractQuantityItem = basketItem => {
    dispatch(subtractQuantity(basketItem))
    setItemQty(itemQty - 1)
  }
  const addQuantityItem = basketItem => {
    dispatch(addQuantity(basketItem))
    setItemQty(itemQty + 1)
  }

  const removeItem = basketItem => {
    dispatch(removeItemBasket(basketItem))
  }

  let ProductPrice = product.price * product.quantity

  return (
    <ProductRow>
      <GatsbyImage image={singleImage} alt="" className="cart-image--height" />
      <NameQtyContainer>
        <NameContainer>
          <p className="product-title">{singleName}</p>
        </NameContainer>
        <QtyDeleteContainer>
          <QtyAdjustContainer>
            <QtyAdjust onClick={() => subtractQuantityItem(product)}>
              <span className="qty-controls--cart">-</span>
            </QtyAdjust>
            <span className="qty-controls--cart">{product.quantity}</span>
            <QtyAdjust onClick={() => addQuantityItem(product)}>
              <span className="qty-controls--cart">+</span>
            </QtyAdjust>
          </QtyAdjustContainer>
          <Delete onClick={() => removeItem(product)}>
            <IoTrashOutline size={20} />
          </Delete>
        </QtyDeleteContainer>
      </NameQtyContainer>
      <p className="product-price--cart">
        {formatPrice(ProductPrice, product.currency)}
      </p>
    </ProductRow>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(SingleLine)
