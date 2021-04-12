const { slash } = require(`gatsby-core-utils`)
const termsPageTemplate = require.resolve(`../templates/Terms/index.js`)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the Terms and Conditions page data.
const GET_TERMS_PAGE = `
query GET_TERMS_PAGE {
  page: contentfulContentpageHeader(pageTitle: {eq: "Shop"}) {
    pageTitle
    pageHeaderText
    pageHeaderSubtext
    pageHeaderImage {
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
    // Do query to get terms and condition page data.
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
