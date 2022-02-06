import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Banner,
  HeaderContainer,
  ProductContainer,
} from "./RelatedProductStyles"
import ProductCard from "./ProductCard"

const RELATED_HEADER = "wat je misschien ook lekker vindt..."

const Relatedproduct = ({ currentProduct }) => {
  // const RelatedProducts = useStaticQuery(graphql`
  //   query RelatedProducts {
  //     fourProducts: allShopifyProduct(
  //       filter: {status: {eq: "ACTIVE"}}
  //       sort: {fields: createdAt, order: DESC}
  //       limit: 4
  //     ) {
  //       edges {
  //         node {
  //           id
  //           title
  //           handle
  //           status
  //           description
  //           descriptionHtml
  //           shopifyId
  //           images {
  //             gatsbyImageData
  //           }
  //           variants {
  //             id
  //             title
  //             price
  //             availableForSale
  //             shopifyId
  //             selectedOptions {
  //               name
  //               value
  //             }
  //           }
  //           priceRangeV2 {
  //             maxVariantPrice {
  //               amount
  //               currencyCode
  //             }
  //             minVariantPrice {
  //               amount
  //               currencyCode
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { edges } = RelatedProducts.fourProducts
  // const otherRelatedProducts = edges.filter(
  //   item => item.node.shopifyId !== currentProduct
  // )

  // const maxThreeProducts = otherRelatedProducts.slice(0, 3)
  // const mappedProducts = maxThreeProducts
  //   ? maxThreeProducts.map((item, index) => (
  //       <ProductCard key={index} product={item.node} />
  //     ))
  //   : null

  return (
    <div className="full-bleed">
      <Banner>
        <HeaderContainer>
          <h2 className="related-product--header">{RELATED_HEADER}</h2>
        </HeaderContainer>
      </Banner>
      {/* <ProductContainer>{mappedProducts}</ProductContainer> */}
      <ProductContainer>Niets om te tonen.</ProductContainer>
    </div>
  )
}

export default Relatedproduct
