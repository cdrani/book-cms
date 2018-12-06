import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1px 0;
  margin-bottom: 30px;
`

const Nav = styled.nav`
  background-color: #fff;
  width: 85.7%;
  height: 8.7%;
  margin: 23px auto 27px auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
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
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  color: #0290ff;
  text-transform: none;
`

const Profile = styled.a`
  width: 50px;
`

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <LinkWrapper>
        <Link>BookStore CMS</Link>
      </LinkWrapper>
      <Profile>
        <Img src="./profile.png" alt="profile" />
      </Profile>
    </Nav>
  </HeaderWrapper>
)

export default Header
