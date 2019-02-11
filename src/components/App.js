import React from 'react'
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import decode from 'jwt-decode'

import MainPage from './MainPage'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!token || !refreshToken) {
    return false
  }

  try {
    const currentTime = Date.now().valueOf() / 1000
    const tokenExpiration = decode(refreshToken).exp

    if (currentTime > tokenExpiration) {
      return false
    }
  } catch (e) {
    return false
  }

  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin' }} />
        )
      }
    />
  )
}

const App = () => {
  return (
    <Router>
      <>
        <Route
          path="/"
          render={props => <Header {...props} isAuthed={checkAuth()} />}
        />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <PrivateRoute exact path="/books" component={MainPage} />
        </Switch>
      </>
    </Router>
  )
}

export default App
