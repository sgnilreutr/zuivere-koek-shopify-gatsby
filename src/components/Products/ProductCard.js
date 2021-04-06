import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import {Link} from 'gatsby'

import { IoCartOutline } from 'react-icons/io5'
import { connect } from 'react-redux'

import { addItemBasket } from '../../store/app'
import { formatPrice } from '../../utils'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}
const buttonStyles = {
  display: 'block',
  fontSize: '13px',
  textAlign: 'center',
  color: '#000',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}

const ProductCard = ({ product, dispatch }) => {
  const [loading, setLoading] = useState(false)

  const productInfo = product ? product : null

  console.log(productInfo)

  const productImage = {
    img: productInfo?.localFiles[0]?.childImageSharp?.gatsbyImageData,
    // alt: productInfo?.image?.altText || `featured-image`,
  }

  // console.log(product)
  //   console.log(productImage.img)

  const handleSubmit = async event => {
    event.preventDefault()
    // setLoading(true)
    const selectedProduct = {
      id: product.id,
      name: product.name,
      image: productImage.img,
      priceID: product.prices[0].id,
      price: product.prices[0].unit_amount,
      currency: product.prices[0].currency,
    }
    dispatch(addItemBasket(selectedProduct))

    // const price = new FormData(event.target).get('priceSelect')
    // const stripe = await getStripe()
    // const { error } = await stripe.redirectToCheckout({
    //   mode: 'payment',
    //   lineItems: [{ price, quantity: 1 }],
    //   successUrl: `${window.location.origin}/page-2/`,
    //   cancelUrl: `${window.location.origin}/advanced`,
    // })

    // if (error) {
    //   console.warn('Error:', error)
    //   setLoading(false)
    // }
  }

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: 'none' }}>
          {productImage.img ? (
            <Link to={`${productInfo.id}`}>
            <figure>
              <GatsbyImage
                image={productImage.img}
                alt=""
                className="blog-preview-image"
              />
            </figure>
            </Link>
          ) : null }
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <label>
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
          </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          <IoCartOutline />
        </button>
      </form>
    </div>
  )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(ProductCard)
