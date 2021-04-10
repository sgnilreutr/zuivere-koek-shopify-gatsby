import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Menu from '../Menu'
import {
  HeaderWrapper,
  LogoContainer,
  NavContainer,
  NavWrapper,
} from './headerStyles'

const Header = ({ siteTitle }) => (
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
        <Menu />
      </NavContainer>
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
