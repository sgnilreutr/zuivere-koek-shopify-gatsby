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
  const productInfo = product ? product.node : null
  const TOASTER_TEXT = 'is toegevoegd aan je winkelmand.'

  const productImage = {
    img: productInfo?.images[0].localFile?.childImageSharp?.gatsbyImageData,
    // alt: productInfo?.image?.altText || `featured-image`,
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const selectedProduct = {
      id: product.id,
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
          <Link to={`${productInfo.handle}`}>
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
            <h4 className="product-title product-title--overview">
              {productInfo.title}
            </h4>
            {productInfo.priceRange.minVariantPrice &&
              <span
                className="product-price--overview"
                // value={price.id}
              >
                {formatPrice(productInfo.priceRange.minVariantPrice.amount, productInfo.priceRange.currencyCode)}
              </span>
            }
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
