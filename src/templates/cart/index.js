import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Cart from '../../components/Cart'

const CartPage = props => {
  const {
    pageContext: {
      page: { pageTitle },
    },
  } = props

  // const pageData = props.pageContext.page && pageHeaderText

  return (
    <Layout>
      <SEO title={pageTitle} />
      {props.pageContext.page ? (
        <>
          {/* <Cart pageText={pageData} /> */}
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default CartPage
