const ImageFragmentContent = `
fragment ImageFragmentContent on ContentfulContentpageHeader {
    pageHeaderImage {
        localFile {
        childImageSharp {
          gatsbyImageData
        }
    }
}
}
`

module.exports.ImageFragmentContent = ImageFragmentContent
