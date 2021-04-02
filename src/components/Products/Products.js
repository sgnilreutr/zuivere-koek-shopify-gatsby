import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ProductCard from './ProductCard'
import { connect } from 'react-redux'

import { toggleDarkMode } from '../../store/app'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

const Products = ({isDarkMode, dispatch}) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  localFiles {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }

        return (
          <div style={containerStyles}>
            {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
            <button
              style={isDarkMode ? { background: 'black', color: 'white' } : null} onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>Dark mode {isDarkMode ? 'on' : 'off'}</button>
          </div>
        )
      }}
    />
  )
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null)(Products)
