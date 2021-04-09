const { slash } = require(`gatsby-core-utils`)
const cartPageTemplate = require.resolve(`../templates/cart/index.js`)
const { ImageFragmentContent } = require(`./fragments/ImageFragmentContent.js`)
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the shop page data.
const GET_CART_PAGE = `
query GET_CART_PAGE {
  page: contentfulContentpageHeader {
    pageTitle
    pageHeaderText
    pageHeaderSubtext
      ...ImageFragmentContent
  }
}
${ImageFragmentContent}
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
      // path: page.uri,
      component: slash(cartPageTemplate),
      context: {
        page,
      },
    })
  })
}
