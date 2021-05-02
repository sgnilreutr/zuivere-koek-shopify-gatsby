import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Wrapper } from './UspHeaderStyles'

const Uspheader = () => {
  const { header } = useStaticQuery(graphql`
    query HEADER_USP {
      header: contentfulComponentText(title: { eq: "Usp Header Bar" }) {
        id
        text {
          text
        }
      }
    }
  `)

  const { text } = header

  return (
    <Wrapper>
      <ReactMarkdown className="landingpage-p">{text.text}</ReactMarkdown>
    </Wrapper>
  )
}

export default Uspheader
