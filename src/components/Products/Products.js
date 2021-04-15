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
            sort: { fields: createdAt, order: DESC }
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
        // // Group prices by product
        // const products = {}
        // for (const { node: price } of prices.edges) {
        //   const product = price.product
        //   if (!products[product.id]) {
        //     products[product.id] = product
        //     products[product.id].prices = []
        //   }
        //   products[product.id].prices.push(price)
        // }

        const products = allProducts.edges

        // console.log(products)

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
