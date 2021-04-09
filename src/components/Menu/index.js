import React from 'react'
import { Link } from 'gatsby'
import { useHistory } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { MenuItem, MenuWrapper } from './MenuStyles'

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem to={'/shop'}>Shop</MenuItem>
      <MenuItem to={'/cart'}>
        <IoCartOutline size={30} />
      </MenuItem>
    </MenuWrapper>
  )
}

export default Menu
