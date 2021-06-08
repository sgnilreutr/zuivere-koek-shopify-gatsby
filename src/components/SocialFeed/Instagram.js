import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SocialContainer, SocialInfoContainer } from './InstagramStyles'

const FOLLOW_US_TEXT = 'Volg ons op Instagram'

const Instagram = () => {
  const { socialFeed } = useStaticQuery(graphql`
    query INSTAGRAM_POSTS {
      socialFeed: allInstaNode(sort: { order: DESC, fields: timestamp }) {
        edges {
          node {
            likes
            timestamp
            caption
            permalink
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)
  const [menuItems, setMenuItems] = useState([])

  const Menu = socialFeed =>
    socialFeed && socialFeed.edges.length > 0
      ? socialFeed.edges.map((item, index) => {
          return (
            <a href={item.node.permalink} key={index}>
              <SocialInfoContainer>
                <div>
                  <GatsbyImage
                    image={item.node.localFile.childImageSharp.gatsbyImageData}
                    alt={item.node.caption}
                  />
                </div>
              </SocialInfoContainer>
            </a>
          )
        })
      : null

  const ArrowLeft = (
    <div className="arrow-global arrow-prev">
      <FaChevronLeft size={30} />
    </div>
  )
  const ArrowRight = (
    <div className="arrow-global arrow-next">
      <FaChevronRight size={30} />
    </div>
  )

  // Create menu from items
  useEffect(() => {
    setMenuItems(Menu(socialFeed))
  }, [socialFeed])

  return (
    <SocialContainer>
      <h2 className="block-header--pink">{FOLLOW_US_TEXT}</h2>
      <ScrollMenu
        data={menuItems}
        dragging={true}
        wheel={false}
        clickWhenDrag={false}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </SocialContainer>
  )
}

export default Instagram
