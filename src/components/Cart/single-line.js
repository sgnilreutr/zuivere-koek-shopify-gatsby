import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IoClose } from 'react-icons/io5'

import { AddItemBasket, RemoveItemBasket } from '../../store/app'
import { formatPrice } from '../../utils'

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 80px auto auto;
  align-items: end;
`

const SingleLine = ({ product }) => {
  // const { allProducts } = useStaticQuery(graphql`
  //   query ALL_PRODUCTS {
  //     allStripePrice {
  //       edges {
  //         node {
  //           product {
  //             id
  //             name
  //             localFiles {
  //               childImageSharp {
  //                 gatsbyImageData
  //               }
  //             }
  //           }
  //           currency
  //           unit_amount_decimal
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(product)
  // console.log(allProducts)
  // console.log(allProducts.map(product =>  product.id))

  return (
    <ProductRow>
      <GatsbyImage
        image={product.image}
        alt=""
        //   className="hero-image full-bleed"
      />
      <p>{product.name}</p>
      <p>{formatPrice(product.price, product.currency)}</p>
    </ProductRow>
  )
}

export default SingleLine
