import React from 'react'
// import styled from 'styled-components'
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

import MainPage from './MainPage'
// import BooksList from '../containers/BooksList'
// import BooksForm from '../containers/BooksForm'
// import CategoryFilter from '../containers/CategoryFilter'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'


const loggedIn = () => !!localStorage.getItem('token')

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route
          path="/books"
          render={() => {
            if (!loggedIn()) {
              return <Redirect to="/" />
            }
            return <MainPage />
          }}
        />
      </Switch>
    </div>
  </Router>
)

export default App
