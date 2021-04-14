import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import SEO from '../../components/seo'
import Cart from '../../components/Cart'

const DesktopWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MobileWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    display: none;
  }
`

const CartPage = props => {
  const {
    pageContext: {
      page: { pageTitle },
    },
  } = props

  const pageData =
    props.pageContext.page && props.pageContext.page.pageHeaderText
  // console.log(props.pageContext.page.pageHeaderText )

  return (
    <Layout>
      <SEO title={pageTitle} />
      {props.pageContext.page ? (
        <>
          <Cart pageText={pageData} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default CartPage
