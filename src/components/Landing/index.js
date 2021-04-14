import React from 'react'
import { Wrapper } from './landingStyles'
import Column from './Column'

const LandingPage = ({ page }) => {
  const pageData = page[0]

  return (
    <Wrapper>
      {pageData ? (
        <>
          {pageData.columns &&
            pageData.columns.map((item, index) => (
              <Column key={index} content={item} />
            ))}
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Wrapper>
  )
}

export default LandingPage
