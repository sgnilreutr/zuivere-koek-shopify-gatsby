import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import LandingPage from '../../components/Landing'
import Hero from '../../components/Landing/Hero'

const TermsPage = props => {
  const {
    pageContext: {
      page: { name, hero, sections },
    },
  } = props

  return (
    <Layout>
      <SEO title={name} />
      {props.pageContext.page ? (
        <>
          <Hero hero={hero} />
          <LandingPage page={sections} />
        </>
      ) : (
        <div>{ERROR_MESSAGE}</div>
      )}
    </Layout>
  )
}

export default TermsPage
