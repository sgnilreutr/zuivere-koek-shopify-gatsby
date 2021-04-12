import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../../components/seo'
import Cart from '../../components/Cart'


const TermsPage = props => {
  const {
    pageContext: {
      page: { pageHeaderText },
    },
  } = props

  const pageData =
    props.pageContext.page && props.pageContext.page.pageHeaderText
  // console.log(props.pageContext.page.pageHeaderText )

  return (
    <Layout>
      <SEO title="Home" />
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

export default TermsPage
