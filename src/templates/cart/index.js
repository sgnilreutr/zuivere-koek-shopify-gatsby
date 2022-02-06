import React from "react"
import { ERROR_MESSAGE } from "../../utils"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Cart from "../../components/Cart"
// import Instagram from '../../components/SocialFeed/Instagram'

const CartPage = props => {
  const {
    pageContext: {
      page: {
        hero: { pageHeaderText },
        sections,
      },
    },
  } = props

  return (
    <Layout>
      <SEO title={pageHeaderText} />
      {props.pageContext.page ? (
        <>
          <Cart pageHeaderText={pageHeaderText} sections={sections} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
      {/* <div className="full-bleed">
        <Instagram />
      </div> */}
    </Layout>
  )
}

export default CartPage
