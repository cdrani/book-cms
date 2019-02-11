import React from 'react'
import { useMutation } from 'react-apollo-hooks'

import {
  Anchor,
  AnchorWrapper,
  HeaderWrapper,
  Nav,
  UPDATELOGINSTATUS,
} from '../constants'
import NavLink from './Link'

const renderNavButton = (isAuthed, updateLoginStatus) => {
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    updateLoginStatus({ variables: { loggedIn: false } })
  }

  if (isAuthed) {
    return <NavLink to="/" onClick={handleClick}>SignOut</NavLink>
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

const Header = ({ isAuthed }) => {
  const updateLoginStatus = useMutation(UPDATELOGINSTATUS)
  return (
    <HeaderWrapper>
      <Nav>
        <AnchorWrapper>
          <Anchor>BookCMS</Anchor>
          {renderNavButton(isAuthed, updateLoginStatus)}
        </AnchorWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
