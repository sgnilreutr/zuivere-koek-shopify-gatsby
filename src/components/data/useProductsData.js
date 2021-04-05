import { useStaticQuery, graphql } from 'gatsby'

const useProductData = () => {
  const { products } = useStaticQuery(graphql`
    {
      prices: allStripePrice(
        filter: { active: { eq: true } }
        sort: { fields: [unit_amount] }
      ) {
        edges {
          node {
            id
            active
            currency
            unit_amount
            product {
              id
              name
              localFiles {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return products.node
}
