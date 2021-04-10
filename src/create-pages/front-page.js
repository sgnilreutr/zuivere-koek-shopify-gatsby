const { slash } = require(`gatsby-core-utils`)
const frontPageTemplate = require.resolve(`../templates/front-page/index.js`)
// const { ImageFragment } = require('./fragments/image/index.js');
// const { SeoFragment } = require('./fragments/seo/index.js');

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: contentfulComponentHomepage {
    heroHeader
    reasonHeader
    introductionHeader
    heroImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    duurzaamBody
    duurzaamHeader
    duurzaamImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    lowImpactBody
    lowImpactHeader
    lowImpactImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    metLiefdeBody
    metLiefdeHeader
    metLiefdeImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    opBestellingBody
    opBestellingHeader
    opBestellingImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    socialHeader
    timEnRuthBody
    transparantBody
    transparantHeader
    transparantImage {
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    usp1Body
    usp1Header
    usp2Body
    usp2Header
    usp3Body
    usp3Header
    verassingBody
    verassingHeader
    verassingImage {
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

// query GET_FRONT_PAGE {
//   page: contentfulHomepage {
//     heroHeader
//     reasonHeader
//     introductionHeader
//     hero {
//       gatsbyImageData
//     }
//     duurzaamBody
//     duurzaamHeader
//     duurzaamImage {
//       gatsbyImageData
//     }
//     lowImpactBody
//     lowImpactHeader
//     lowImpactImage {
//       gatsbyImageData
//     }
//     metLiefdeBody
//     metLiefdeHeader
//     metLiefdeImage {
//       gatsbyImageData
//     }
//     opBestellingBody
//     opBestellingHeader
//     opBestellingImage {
//       gatsbyImageData
//     }
//     socialHeader
//     timEnRuthHeader
//     transparantBody
//     transparantHeader
//     transparantImage {
//       gatsbyImageData
//     }
//     usp1body
//     usp1header
//     usp2body
//     usp2header
//     usp3body
//     usp3header
//     verassingBody
//     verassingHeader
//     verassingImage {
//       gatsbyImageData
//     }
//   }
// }
