import React, { Fragment } from 'react'
import styled from 'styled-components'
import { compose, graphql } from 'react-apollo'
import { Link, Redirect } from 'react-router-dom'

import { UPDATELOGINSTATUS, GETLOGINSTATUS } from '../constants'

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

const AnchorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`

const Anchor = styled.a`
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

/*eslint no-restricted-globals:  'warn' */

const renderRegistrationButtons = (loggedIn, updateLoginStatus) => {
  return loggedIn ? (
    <Fragment>
      <Link
        to="/"
        innerRef={() => {
          localStorage.removeItem('token')
          updateLoginStatus({ variables: { loggedIn: false } })
          return <Redirect to="/" />
        }}
      >
        Signout
      </Link>
    </Fragment>
  ) : (
    <Fragment>
      <Link to="/signin">SignIn</Link>
      <Link to="/signup">SignUp</Link>
    </Fragment>
  )
}

const Header = ({ history, loggedIn, updateLoginStatus }) => (
  <HeaderWrapper>
    <Nav>
      <AnchorWrapper>
        <Anchor>BookStore CMS</Anchor>
      </AnchorWrapper>
      {renderRegistrationButtons(loggedIn, updateLoginStatus)}
      <Profile>
        <Img src="./profile.png" alt="profile" />
      </Profile>
    </Nav>
  </HeaderWrapper>
)

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' }),
  graphql(GETLOGINSTATUS, {
    props: ({
      data: {
        auth: { loggedIn }
      }
    }) => ({ loggedIn })
  })
)(Header)
