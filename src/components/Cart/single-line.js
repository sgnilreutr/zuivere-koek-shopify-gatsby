import React from 'react'
import { connect } from 'react-redux'

import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import { addQuantity, subtractQuantity } from '../../store/app'
import { formatPrice } from '../../utils'

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 80px auto auto;
  align-items: end;
`

const SingleLine = ({ product, dispatch }) => {
  const [itemQty, setItemQty] = React.useState(product.quantity)

  const subtractQuantityItem = basketItem => {
    dispatch(subtractQuantity(basketItem))
    setItemQty(itemQty - 1)
  }
  const addQuantityItem = basketItem => {
    dispatch(addQuantity(basketItem))
    setItemQty(itemQty + 1)
  }

  let ProductPrice = product.price * product.quantity

  return (
    <ProductRow>
      <GatsbyImage
        image={product.image}
        alt=""
        //   className="hero-image full-bleed"
      />
      <p>{product.name}</p>
      <div>
        <div onClick={() => subtractQuantityItem(product)}>-</div>
        <p>{product.quantity}</p>
        <div onClick={() => addQuantityItem(product)}>+</div>
      </div>
      <p>{formatPrice(ProductPrice, product.currency)}</p>
    </ProductRow>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(SingleLine)
