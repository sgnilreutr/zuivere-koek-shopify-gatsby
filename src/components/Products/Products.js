import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ProductCard from './ProductCard'
import { ProductGrid } from './ProductsStyles'

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query Products {
          allProducts: allShopifyProduct(
            filter: { availableForSale: { eq: true } }
            sort: {fields: publishedAt, order: DESC}
          ) {
            edges {
              node {
                id
                title
                handle
                availableForSale
                description
                descriptionHtml
                shopifyId
                images {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
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
                priceRange {
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

        const boxItem = products.filter((product) => product.node.priceRange.maxVariantPrice.amount > 14)
        const restItems = products.filter((product) => product.node.priceRange.maxVariantPrice.amount < 10)
        const allProductsResorted = boxItem.concat(restItems)

        return (
          <ProductGrid>
            {allProductsResorted.map((product) => (
              <ProductCard key={product.node.id} product={product.node} />
            ))}
          </ProductGrid>
        )
      }}
    />
  )
}

export default Products
