import React from 'react'
import parse from 'html-react-parser'
import { Wrapper } from './columnStyles'

const Column = ({ content }) => {
  const { title, text } = content

  return (
    <Wrapper>
      <h2 className="landingpage-h2">{title}</h2>
      <p className="landingpage-p">{parse(text.text)}</p>
    </Wrapper>
  )
}

export default Column
