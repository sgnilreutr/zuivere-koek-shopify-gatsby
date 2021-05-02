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
            sort: { fields: variants___price, order: DESC }
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

        return (
          <ProductGrid>
            {products.map((product, index) => (
              <ProductCard key={index} product={product.node} />
            ))}
          </ProductGrid>
        )
      }}
    />
  )
}

export default Products
