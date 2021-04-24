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
            <h2 style={{ margin: 0 }}>
              <Link to="/" className="site-title">
                {siteTitle}
              </Link>
            </h2>
          </LogoContainer>
          <Menu toggleMenu={toggleMenu} />
          <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </NavContainer>
      </NavWrapper>
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
