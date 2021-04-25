import React from 'react'
import { ERROR_MESSAGE } from '../../utils'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Cart from '../../components/Cart'

const CartPage = props => {
  const {
    pageContext: {
      page: { pageHeaderText },
    },
  } = props

  console.log(props.pageContext.page)
  // const pageData = props.pageContext.page && pageHeaderText

  return (
    <Layout>
      <SEO title={pageHeaderText} />
      {props.pageContext.page ? (
        <>
          <Cart pageText={pageHeaderText} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default CartPage
