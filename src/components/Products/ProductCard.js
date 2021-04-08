import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { IoCartOutline } from 'react-icons/io5'
import { connect } from 'react-redux'
import { addItemBasket } from '../../store/app'
import { formatPrice } from '../../utils'
import {
  AddToCartButton,
  ProductCardWrapper,
  ProductPhoto,
  ProductInfo,
  ProductInnerInfo,
} from './ProductCardStyles'
import { toast } from 'react-toastify'

const ProductCard = ({ product, dispatch }) => {
  const [loading, setLoading] = useState(false)
  const productInfo = product ? product : null
  const TOASTER_TEXT = "toegevoegd aan winkelwagen"

  const productImage = {
    img: productInfo?.localFiles[0]?.childImageSharp?.gatsbyImageData,
    // alt: productInfo?.image?.altText || `featured-image`,
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const selectedProduct = {
      id: product.id,
      name: product.name,
      image: productImage.img,
      priceID: product.prices[0].id,
      price: product.prices[0].unit_amount,
      currency: product.prices[0].currency,
    }
    dispatch(addItemBasket(selectedProduct))
  }

  return (
    <ProductCardWrapper>
      <form onSubmit={handleSubmit}>
        {productImage.img ? (
          <Link to={`${productInfo.id}`}>
            <ProductPhoto>
              <GatsbyImage
                image={productImage.img}
                alt=""
                className="blog-preview-image"
              />
            </ProductPhoto>
          </Link>
        ) : null}
        <ProductInfo>
          <ProductInnerInfo to={`${productInfo.id}`}>
            <h4 className="product-title--overview">{product.name}</h4>
            {product.prices.map(price => (
              <span
                className="product-price--overview"
                key={price.id}
                value={price.id}
              >
                {formatPrice(price.unit_amount, price.currency)}
              </span>
            ))}
          </ProductInnerInfo>
          <AddToCartButton
            disabled={loading}
            onClick={() => toast.dark(`${product.name} ${TOASTER_TEXT}`)}
          >
            <IoCartOutline size={30} color={`#f8d8d9`} />
          </AddToCartButton>
        </ProductInfo>
      </form>
    </ProductCardWrapper>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(ProductCard)
