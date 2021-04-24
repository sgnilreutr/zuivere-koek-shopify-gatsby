import React from 'react'
import { Link } from 'gatsby'
import { FiX } from 'react-icons/fi'
// import logo from '../../images/Logo_white.png'
import {
  CloseIcon,
  Logo,
  LogoIcon,
  MenuInnerContainer,
  MenuItem,
  MenuLink,
  MenuWrapper,
  MobileMenu,
  Overlay,
} from './SidebarStyles'

const Sidebar = ({ showMenu, toggleMenu }) => {
  const MenuOptions = [
    { link: '/shop', name: 'Shop' },
    { link: '/over-ons', name: 'Over ons' },
    { link: '/faq', name: 'FAQ' },
    { link: '/contact', name: 'Contact' },
  ]

  return (
    <MenuWrapper className="menu-wrapper">
      <MobileMenu showMenu={showMenu} onClick={toggleMenu}>
        <LogoIcon>
          {/* <Link to="/">
            <Logo src={logo} width={158} />
          </Link> */}
          <CloseIcon onClick={toggleMenu}>
            <FiX size={34} style={{ color: 'white', marginRight: '1rem' }} />
          </CloseIcon>
        </LogoIcon>
        <MenuInnerContainer>
          {MenuOptions.map((menuItem, i) => {
            const path = menuItem.link

            const itemId = 'menu-item-' + menuItem.link.replace(/^\/|\/$/g, '')

            return (
              <MenuItem
                id={itemId}
                key={i + menuItem.link}
                className={
                  'menu-item menu-item-type-custom menu-item-object-custom menu-item-home ' +
                  itemId
                }
              >
                <MenuLink
                  // style={{
                  //   color: 'white',
                  //   textDecoration: 'none',
                  //   textTransform: 'lowercase',
                  //   width: '80px',
                  // }}
                  to={path}
                  activeClassName={
                    'current-menu-item current_page_item small-letters'
                  }
                >
                  {menuItem.name}
                </MenuLink>
              </MenuItem>
            )
          })}
        </MenuInnerContainer>
        <Overlay showMenu={showMenu} />
      </MobileMenu>
    </MenuWrapper>
  )
}

export default Sidebar
