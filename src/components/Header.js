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

const renderNavButton = (history, authorized, updateLoginStatus) => {
  const handleClick = e => {
    e.preventDefault()
    updateLoginStatus({ variables: { loggedIn: false } })
    history.push('/signin')
  }

  if (authorized) {
    return <Button onClick={handleClick}>SignOut</Button>
  } else {
    return (
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
}

const Header = ({ history }) => {
  const {
    data: {
      auth: { loggedIn }
    }
  } = useQuery(GETLOGINSTATUS)

  const updateLoginStatus = useMutation(UPDATELOGINSTATUS)

  return (
    <HeaderWrapper>
      <Nav>
        <AnchorWrapper>
          <Anchor>BookCMS</Anchor>
          {renderNavButton(history, loggedIn, updateLoginStatus)}
        </AnchorWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

export default withRouter(Header)
