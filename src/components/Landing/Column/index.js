import React from 'react'
import parse from 'html-react-parser'
import { Wrapper } from './columnStyles'
import ReactMarkdown from 'react-markdown'

const Column = ({ content }) => {
  const { title, text } = content

  return (
    <Wrapper>
      <h2 className="landingpage-h2">{title}</h2>
      <p className="landingpage-p">{parse(text.text)}</p>
      <ReactMarkdown>{text.text}</ReactMarkdown>
    </Wrapper>
  )
}

export default Column
