import React from 'react'
import { isEmpty } from 'lodash'
import Layout from '../../components/layout'
// import SEO from "../../components/seo";
// import { getOgImage } from "../../utils/functions";
import ProductDetail from '../../components/Products/ProductDetail'

const SingleProductPage = props => {
  const {
    product,
    product: { name, link, seo },
  } = props.pageContext

  // console.log(product.node)

  return (
    <Layout>
      {!isEmpty(props.pageContext) ? (
        <>
          {/* <SEO
              title={name}
              seoData={seo}
              uri={link}
              header={{ siteTitle: 'Gatsby WooCommerce Theme' }}
              openGraphImage={getOgImage(seo)}
            /> */}
          <ProductDetail product={product.node} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SingleProductPage
