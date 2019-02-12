import React from 'react'
import { compose, withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { Anchor, AnchorWrapper, HeaderWrapper, Nav, Button } from '../constants'
import NavLink from './Link'

const renderNavButton = (history, client, isAuthed) => {
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    client.cache.reset()
    history.push('/signin')
  }

  if (isAuthed) {
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

const Header = ({ history, client, isAuthed }) => {
  return (
    <HeaderWrapper>
      <Nav>
        <AnchorWrapper>
          <Anchor>BookCMS</Anchor>
          {renderNavButton(history, client, isAuthed)}
        </AnchorWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

export default compose(
  withApollo,
  withRouter
)(Header)
