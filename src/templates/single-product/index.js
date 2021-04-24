import React from 'react'
import { isEmpty } from 'lodash'
import { ERROR_MESSAGE } from '../../utils'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
// import SEO from "../../components/seo";
// import { getOgImage } from "../../utils/functions";
import ProductDetail from '../../components/Products/ProductDetail'
import Relatedproduct from '../../components/Products/RelatedProduct'

const SingleProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const extraDescription = data.desc.description.text
  // const {
  //   product,
  //   product: { name, link, seo },
  //   extraDescription
  // } = props.pageContext

  // console.log(props.pageContext)
  // console.log(extraDescription)
  // console.log(product.node)

  // console.log(props.pageContext.handle)
  // console.log(product)
  console.log(data.desc.description)

  return (
    <Layout>
      {!isEmpty(data) ? (
        <>
          {/* <SEO
              title={name}
              seoData={seo}
              uri={link}
              header={{ siteTitle: 'Gatsby WooCommerce Theme' }}
              openGraphImage={getOgImage(seo)}
            /> */}
          <ProductDetail
            product={product}
            extraDescription={extraDescription}
          />
          <Relatedproduct currentProduct={product.shopifyId} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!, $title: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      availableForSale
      description
      descriptionHtml
      shopifyId
      images {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
    desc: contentfulProductAdditionalDescription(productTitle: { eq: $title }) {
      productTitle
      description {
        text {
          text
        }
      }
    }
  }
`

export default SingleProductPage
