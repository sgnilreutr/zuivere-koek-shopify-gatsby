import React from 'react'
import parse from 'html-react-parser'
import { Wrapper } from './sectionStyles'

const Section = ({ content }) => {
  // const { title, text } = content
  console.log(content)

  return (
    <Wrapper>
      {/* <h2 className="landingpage-h2">{title}</h2>
      <p className="landingpage-p">{parse(text.text)}</p> */}
    </Wrapper>
  )
}

export default Section
