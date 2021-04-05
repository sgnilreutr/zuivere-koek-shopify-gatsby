import React from 'react'
import { Link } from 'gatsby'
import { useHistory } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'

const Menu = () => {
  return (
    <>
      <Link to={'/shop'} style={{ color: 'white' }}>
        Shop
      </Link>
      <Link to={'/cart'}>
        <IoCartOutline size={30} style={{ color: 'white' }} />
      </Link>
    </>
  )
}

export default Menu
