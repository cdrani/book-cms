import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #fff;
  width: 85.7%;
  height: 8.7%;
  margin: 23px auto 27px auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`

const Link = styled.a`
  color: #121212;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
`

const LargeLink = styled(Link)`
  font-size: 1.8rem;
  color: #0290ff;
  text-transform: none;
`

const LightLink = styled(Link)`
  opacity: 0.5;
`

const Header = () => (
  <header>
    <Nav>
      <LinkWrapper>
        <LargeLink>BookStore CMS</LargeLink>
        <Link>Books</Link>
        <LightLink>Categories</LightLink>
      </LinkWrapper>
    </Nav>
  </header>
)

export default Header
