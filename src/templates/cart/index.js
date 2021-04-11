import React from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
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

const DiscoverContainer = styled.div`
  background-color: hsl(358, 71%, 91%);
`

const WhyContainer = styled.div``

const OverOnsWrapper = styled.div``

const OverOnsContent = styled.div``

const BlogWrapper = styled.div`
  @media only screen and (min-width: 481px) {
    margin-top: 160px;
    margin-bottom: 100px;
    display: flex;
    place-content: center;
  }
`

const CartPage = props => {
  const {
    pageContext: {
      page: { pageHeaderText },
    },
  } = props

  const pageData = props.pageContext.page && props.pageContext.page.pageHeaderText
  // console.log(props.pageContext.page.pageHeaderText )

  return (
    <Layout>
      <SEO title="Home" />
      {props.pageContext.page ? (
        <>
          <Cart pageText={pageData}/>
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}

export default CartPage
