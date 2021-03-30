import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from '../components/Products/Products'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
  </Layout>
)

export default IndexPage
