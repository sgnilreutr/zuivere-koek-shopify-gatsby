const { slash } = require(`gatsby-core-utils`)
const shopPageTemplate = require.resolve(`../templates/shop/index.js`)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the shop page data.
const GET_SHOP_PAGE = `
query GET_SHOP_PAGE {
  page: contentfulComponentContentpageHeader(title: {eq: "Shop"}) {
    title
    pageHeaderText
    pageHeaderSubtext
    header_image {
      localFile {
        childImageSharp {
          gatsbyImageData
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
    return await graphql(GET_SHOP_PAGE).then(({ data }) => {
      const { page } = data

      return { page }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page }) => {
    createPage({
      path: `shop`,
      component: slash(shopPageTemplate),
      context: {
        page,
      },
    })
  })
}
