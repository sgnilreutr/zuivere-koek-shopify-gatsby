import React, { useState, useContext, useEffect, useCallback } from 'react'
import StoreContext from '~/context/StoreContext'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import { formatPrice, sanitize } from '../../utils/index'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import { IoCartOutline } from 'react-icons/io5'
import {
  AddToCart,
  ProductImage,
  ProductWrapper,
  ProductDesc,
} from './ProductDetailStyles'

const ProductDetail = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productImage = {
    img: product.images[0].localFile.childImageSharp.gatsbyImageData || ``,
    // alt: product.node.image.altText || ``,
  }

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

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const displayProductImages = () => {
    if (!isEmpty(product.images)) {
      return (
        <figure>
          <GatsbyImage
            image={productImage.img}
            // alt={productImage.alt}
          />
        </figure>
      )
    } else {
      return null
    }
  }

  const variantPrice = product.priceRange
    ? formatPrice(
        product.priceRange.minVariantPrice.amount,
        product.priceRange.minVariantPrice.currencyCode
      )
    : null
  // const variantPrice = product.variant.priceV2 ? (
  //   formatPrice(product.variant.priceV2.amount, product.variant.priceV2.currencyCode)
  // ) : null

  return !isEmpty(product) ? (
    <ProductWrapper>
      <div className="col-lg-5 col-md-6 mb-5 product-image-wrap">
        <ProductImage>{displayProductImages()}</ProductImage>
      </div>
      <ProductDesc>
        <div className="single-product-desc">
          <h3>{product.name ? product.name : ''}</h3>
          {!isEmpty(product.description) ? (
            <p>{parse(product.description)}</p>
          ) : null}
          <AddToCart>
            <h6 className="card-subtitle mb-3">{variantPrice}</h6>
            <button
              type="submit"
              onClick={handleAddToCart}
              disabled={!available || adding}
            >
              <IoCartOutline />
            </button>
          </AddToCart>
        </div>
      </ProductDesc>
    </ProductWrapper>
  ) : null
}

export default ProductDetail
