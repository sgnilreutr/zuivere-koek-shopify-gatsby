import React from 'react'
import { isEmpty } from 'lodash'
import Layout from '../../components/layout'
// import SEO from "../../components/seo";
// import { getOgImage } from "../../utils/functions";
import ProductDetail from '../../components/Products/ProductDetail'
import Relatedproduct from '../../components/Products/RelatedProduct'

const SingleProductPage = props => {
  const {
    product,
    product: { name, link, seo },
  } = props.pageContext

  console.log(props.pageContext)

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
          <Relatedproduct currentProduct={product.node.shopifyId} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default SingleProductPage
