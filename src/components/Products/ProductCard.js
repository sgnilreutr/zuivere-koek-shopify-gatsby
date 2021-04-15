import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { IoCartOutline } from 'react-icons/io5'
import { formatPrice } from '../../utils'
import {
  AddToCartButton,
  ProductCardWrapper,
  ProductPhoto,
  ProductInfo,
  ProductInnerInfo,
} from './ProductCardStyles'
import StoreContext from '~/context/StoreContext'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [loading, setLoading] = useState(false)
  const productInfo = product ? product : null
  const QUICKBUY_QTY = 1
  const TOASTER_TEXT = 'is toegevoegd aan je winkelmand.'

  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const productImage = {
    img: productInfo?.images[0].localFile?.childImageSharp?.gatsbyImageData,
    // alt: productInfo?.image?.altText || `featured-image`,
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    addVariantToCart(productVariant.shopifyId, QUICKBUY_QTY)
    setLoading(false)
  }

  return (
    <ProductCardWrapper>
      <form onSubmit={handleSubmit}>
        {productImage.img ? (
          <Link to={`/shop/${productInfo.handle}`}>
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
            {productInfo.priceRange.minVariantPrice && (
              <span
                className="product-price--overview"
                // value={price.id}
              >
                {formatPrice(
                  productInfo.priceRange.minVariantPrice.amount,
                  productInfo.priceRange.currencyCode
                )}
              </span>
            )}
          </ProductInnerInfo>
          <AddToCartButton
            disabled={loading || adding || !available}
            onClick={() => toast.dark(`${productInfo.title} ${TOASTER_TEXT}`)}
          >
            <IoCartOutline size={30} color={`#f8d8d9`} />
          </AddToCartButton>
        </ProductInfo>
      </form>
    </ProductCardWrapper>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductCard
