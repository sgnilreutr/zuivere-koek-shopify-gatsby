const { slash } = require(`gatsby-core-utils`)
const singleProductTemplate = require.resolve(`../templates/single-product/index.js`)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the shop page data.
const GET_ALL_PRODUCTS = `
query GET_ALL_PRODUCTS {
  products: allStripePrice(filter: {active: {eq: true}}) {
    edges {
      node {
        id
        active
        currency
        unit_amount
        product {
          id
          name
          description
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
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get home page data.
    return await graphql(GET_ALL_PRODUCTS).then(({ data }) => {
      const { products } = data

      let allTheProducts = [];
		  products && products.edges.map(product => {
			  allTheProducts.push(product)
		  })

      return { allProducts: allTheProducts }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ allProducts }) => {
    allProducts.length && allProducts.map(product => {
      createPage({
        path: `shop/${product.node.product.id}`,
        // path: page.uri,
        component: slash(singleProductTemplate),
        context: { product },
      })
    })
  })
}
