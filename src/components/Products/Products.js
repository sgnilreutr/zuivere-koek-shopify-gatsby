import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import { ProductGrid } from "./ProductsStyles"

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query Products {
          allProducts: allShopifyProduct(
            filter: { status: { eq: "ACTIVE" } }
            sort: { fields: variants___price, order: DESC }
          ) {
            edges {
              node {
                id
                title
                handle
                status
                description
                descriptionHtml
                shopifyId
                images {
                  gatsbyImageData
                }
                variants {
                  id
                  title
                  price
                  availableForSale
                  shopifyId
                  selectedOptions {
                    name
                    value
                  }
                }
                priceRangeV2 {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allProducts }) => {
        const products = allProducts.edges

        const boxItem = products.filter(
          product => product.node.priceRangeV2.maxVariantPrice.amount > 14
        )
        const restItems = products.filter(
          product => product.node.priceRangeV2.maxVariantPrice.amount < 10
        )
        const allProductsResorted = boxItem.concat(restItems)

        return (
          <ProductGrid>
            {allProductsResorted.map(product => (
              <ProductCard key={product.node.id} product={product.node} />
            ))}
          </ProductGrid>
        )
      }}
    />
  )
}

export default Products
