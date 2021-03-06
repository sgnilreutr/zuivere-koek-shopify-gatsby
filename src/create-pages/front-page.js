const { slash } = require(`gatsby-core-utils`)
const frontPageTemplate = require.resolve(`../templates/front-page/index.js`)

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: contentfulLandingPage(slug: {eq: "frontpage"}) {
    hero {
      ... on ContentfulComponentHero {
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        text {
          text
        }
        ctaText
        ctaLink
      }
    }
    sections {
      ... on ContentfulComponentSection {
        id
        name
        subname
        columns {
          ... on ContentfulComponentText {
            id
            title
            text {
              text
            }
          }
          ... on ContentfulComponentImage {
            id
            title
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on ContentfulComponentUsp {
            id
            text {
              text
            }
            title
            uspImage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on ContentfulComponentNewsItem {
            id
            ctaText
            ctaLink
            title
            text {
              text
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
    return await graphql(GET_FRONT_PAGE).then(({ data }) => {
      const { page } = data

      return { page }
    })
  }

  // When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
  await fetchPosts().then(({ page }) => {
    createPage({
      path: `/`,
      // path: page.uri,
      component: slash(frontPageTemplate),
      context: {
        page,
      },
    })
  })
}
