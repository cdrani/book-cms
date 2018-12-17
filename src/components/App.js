import React from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'
import CategoryFilter from '../containers/CategoryFilter'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85.7%;
  margin-bottom: 30px;
`

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/books">
          <MainContainer>
            <MainContent>
              <CategoryFilter />
              <BooksList />
              <BooksForm />
            </MainContent>
          </MainContainer>
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
