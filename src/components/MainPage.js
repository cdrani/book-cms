import React from 'react'
import styled from 'styled-components'

import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'
import CategoryFilter from '../containers/CategoryFilter'

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

const MainPage = () => (
  <MainContainer>
    <MainContent>
      <CategoryFilter />
      <BooksList />
      <BooksForm />
    </MainContent>
  </MainContainer>
)

export default MainPage
