import React from 'react'
import MenuCart from '../MenuCart'
import { FiMenu } from 'react-icons/fi'
import {
  DesktopWrapper,
  InnerMenuWrapper,
  MenuItem,
  MenuWrapper,
  NoLinkMenuItem,
  OpenIcon,
} from './MenuStyles'

const Menu = ({ toggleMenu }) => {
  const MenuOptions = [
    { link: '/shop', name: 'Shop' },
    { link: '/over-ons', name: 'Over ons' },
    { link: '/faq', name: 'FAQ' },
    { link: '/contact', name: 'Contact' },
  ]

  return (
    <MenuWrapper>
      <OpenIcon onClick={toggleMenu}>
        <NoLinkMenuItem>
          <FiMenu size={30} />
        </NoLinkMenuItem>
      </OpenIcon>
      <DesktopWrapper>
        <InnerMenuWrapper>
          {MenuOptions &&
            MenuOptions.map((item, index) => {
              return (
                <MenuItem key={index} to={item.link}>
                  {item.name}
                </MenuItem>
              )
            })}
        </InnerMenuWrapper>
      </DesktopWrapper>
      <MenuCart />
    </MenuWrapper>
  )
}

export default Menu
