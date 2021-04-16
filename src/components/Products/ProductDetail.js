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
  AddToCartButton,
  ProductContentful,
  ProductImage,
  ProductWrapper,
  ProductDesc,
  QtyAdjust,
  QtyAdjustContainer,
} from './ProductDetailStyles'

const ProductDetail = ({ product, extraDescription }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const {
    text,
  } = extraDescription
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  console.log(text)

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

  const subtractQuantityItem = () => {
    setQuantity(quantity - 1)
  }
  const addQuantityItem = () => {
    setQuantity(quantity + 1)
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

  return !isEmpty(product) ? (
    <ProductWrapper>
      <div>
        <ProductImage>{displayProductImages()}</ProductImage>
        <ProductContentful>
          <p>{text}</p>
        </ProductContentful>
      </div>
      <ProductDesc>
        <div style={{ textAlign: `center` }}>
          <h3 className="product-title">
            {product.title ? product.title : ''}
          </h3>
          {!isEmpty(product.description) ? (
            <p className="landingpage-p">{parse(product.description)}</p>
          ) : null}
          <AddToCart>
            <h4 className="product-price--detail">{variantPrice}</h4>
            <QtyAdjustContainer>
              <QtyAdjust onClick={subtractQuantityItem}>
                <span className="qty-controls--cart">-</span>
              </QtyAdjust>
              <span className="qty-controls--cart">{quantity}</span>
              <QtyAdjust onClick={addQuantityItem}>
                <span className="qty-controls--cart">+</span>
              </QtyAdjust>
            </QtyAdjustContainer>
            <AddToCartButton
              type="submit"
              onClick={handleAddToCart}
              disabled={!available || adding}
            >
              <IoCartOutline size={30} color={`#f8d8d9`} />
            </AddToCartButton>
          </AddToCart>
        </div>
      </ProductDesc>
    </ProductWrapper>
  ) : null
}

export default ProductDetail
