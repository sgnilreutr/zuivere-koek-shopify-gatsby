import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MenuItem, MenuWrapper } from './MenuStyles'
import Badge from '@material-ui/core/Badge'

const Menu = ({ totalCount }) => {
  const MenuOptions = [
    { link: '/shop', name: 'Shop' },
    { link: '/over-ons', name: 'Over ons' },
    { link: '/faq', name: 'FAQ' },
    { link: '/contact', name: 'Contact' },
    {
      link: '/cart',
      name: (
        <Badge badgeContent={totalCount} color="primary">
          <IoCartOutline size={30} />
        </Badge>
      ),
    },
  ]

  return (
    <MenuWrapper>
      {MenuOptions &&
        MenuOptions.map((item, index) => {
          return (
            <MenuItem key={index} to={item.link}>
              {item.name}
            </MenuItem>
          )
        })}
    </MenuWrapper>
  )
}

export default Menu
