const { slash } = require(`gatsby-core-utils`)
// const customTemplatesUris = [ '/'  ];
const customTemplateSlugs = ['/', 'cart']
const singlePageTemplate = require.resolve(`../templates/single-page/index.js`)
// const { ImageFragment } = require('./fragments/image/index');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the pages.
const GET_PAGES = `
query GET_PAGES {
  pages: allContentfulLandingPage(limit: 500) {
    nodes {
      id
      slug
      internalName
    }
  }
}
`
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPages = async () => {
    // Do query to get all pages and categories, this will return the pages and categories.
    return await graphql(GET_PAGES).then(({ data }) => {
      const { pages } = data

      return { pages: pages.nodes }
    })
  }

  // When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
  await fetchPages().then(({ pages }) => {
    // Create Single PAGE: Loop through all pages and create single pages for pages.
    pages &&
      pages.map(page => {
        // If its not a custom template, create the page.
        if (!customTemplateSlugs.includes(page.slug)) {
          createPage({
            path: `${page.slug}`,
            component: slash(singlePageTemplate),
            context: {
              id: page.id,
            }, // pass single page data in context, so its available in the singlePageTemplate in props.pageContext.
          })
        }
      })
  })
}
