const path = require("path")

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Zuiver&Koek`,
    description: `Ontdek de allerlekkerste brievenbuskoeken - 100% vegan, zonder plastic verpakking en ongekend lekker!`,
    author: `@sgnilreutR`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v26fsvm3rd6t`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://zuiverekoek-shop.us1.list-manage.com/subscribe/post?u=adb87ce77fd939daff2cc9ff2&amp;id=afa1b2b93f'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.GATSBY_SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~": path.join(__dirname, "src/"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zuiver&Koek Webshop`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/zuivere-koek-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
