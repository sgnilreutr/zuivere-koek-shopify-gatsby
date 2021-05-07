const { slash } = require(`gatsby-core-utils`)
const cartPageTemplate = require.resolve(`../templates/cart/index.js`)
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the shop page data.
const GET_CART_PAGE = `
query GET_CART_PAGE {
  page: contentfulLandingPage(internalName: {eq: "Cart Landingpage"}) {
    hero {
      ... on ContentfulComponentContentpageHeader {
        id
        pageHeaderText
      }
    }
    sections {
      ... on ContentfulComponentText {
        id
        title
        text {
          text
        }
      }
    }
  }
}
`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async () => {
    // Do query to get cart page data.
    return await graphql(GET_CART_PAGE).then(({ data }) => {
      const { page } = data

      return { page }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page }) => {
    createPage({
      path: `cart`,
      component: slash(cartPageTemplate),
      context: {
        page,
      },
    })
  })
}
