import React from 'react'
import { withRouter } from 'react-router'
import { useMutation, useQuery } from 'react-apollo-hooks'

import {
  Anchor,
  Button,
  AnchorWrapper,
  HeaderWrapper,
  Nav,
  UPDATELOGINSTATUS,
  GETLOGINSTATUS
} from '../constants'
import NavLink from './Link'

const renderNavButton = ({ history }) => {
  const handleClick = () => {
    localStorage.removeItem('token')
    useMutation(UPDATELOGINSTATUS, {
      variables: { loggedIn: false }
    })
    history.push('/')
  }

  const {
    data: {
      auth: { loggedIn }
    }
  } = useQuery(GETLOGINSTATUS)

  return loggedIn ? (
    <Button onClick={handleClick}>SignOut</Button>
  ) : (
    <div
      styles={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'space-between'
      }}
    >
      <NavLink to="/signin">SignIn</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    </div>
  )
}

const Header = ({ history, loggedState, updateLoginStatus }) => (
  <HeaderWrapper>
    <Nav>
      <AnchorWrapper>
        <Anchor>BookCMS</Anchor>
        {renderNavButton(history, loggedState, updateLoginStatus)}
      </AnchorWrapper>
    </Nav>
  </HeaderWrapper>
)

export default withRouter(Header)
