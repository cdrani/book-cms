import React, { Component } from 'react'
import styled from 'styled-components'

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

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
        <SignIn />
        <MainContainer>
          <MainContent>
            <CategoryFilter />
            <BooksList />
            <BooksForm />
          </MainContent>
        </MainContainer>
      </div>
    )
  }
}

export default App
