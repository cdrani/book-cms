import React from 'react'
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import { Query } from 'react-apollo'

import { GETLOGINSTATUS } from '../constants'
import MainPage from './MainPage'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

const App = () => (
  <Router>
    <div>
      <Query query={GETLOGINSTATUS}>
        {({ data, client }) => {
          client.writeData({ data: data.auth })
          return <Header loggedState={data.auth.loggedIn} />
        }}
      </Query>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute loggedIn path="/books" component={MainPage} />
      </Switch>
    </div>
  </Router>
)

export default App
