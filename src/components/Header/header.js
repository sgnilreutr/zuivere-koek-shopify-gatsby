import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Menu from './Menu'
import Sidebar from './Sidebar'
import {
  HeaderWrapper,
  LogoContainer,
  NavContainer,
  NavWrapper,
} from './headerStyles'
import Uspheader from './UspHeader'

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavContainer>
          <LogoContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h2 className="site-title">{siteTitle}</h2>
            </Link>
          </LogoContainer>
          <Menu toggleMenu={toggleMenu} />
          <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </NavContainer>
      </NavWrapper>
      <Uspheader />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
