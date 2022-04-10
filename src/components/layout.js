import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ContextProvider from "~/provider/ContextProvider"
import Header from "./Header/header"
import Footer from "./Footer"
import "./layout.css"
import "../styles/text.css"
import Overlay from "./Overlay/overlay"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(process.env.GATSBY_SHOP_STATUS)

  return (
    <ContextProvider>
      {process.env.GATSBY_SHOP_STATUS !== "online" && <Overlay />}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
