import React from 'react'
import { compose, graphql } from 'react-apollo'
import { withRouter } from 'react-router'

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

const renderNavButton = (history, loggedState, updateLoginStatus) => {
  const updateCache = cache => {
    cache.writeQuery({
      query: GETLOGINSTATUS,
      data: { auth: { __typename: 'Auth', loggedIn: false } }
    })
  }

  return loggedState ? (
    <Button
      onClick={() => {
        localStorage.removeItem('token')
        updateLoginStatus({
          variables: { loggedIn: false },
          update: updateCache
        })
        history.push('/')
      }}
    >
      SignOut
    </Button>
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

export default compose(
  graphql(UPDATELOGINSTATUS, { name: 'updateLoginStatus' })
)(withRouter(Header))
