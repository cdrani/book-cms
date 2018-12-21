import React, { Suspense } from 'react'
import styled from 'styled-components'

import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'
import FilterCategories from '../containers/FilterCategories'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85.7%;
  margin-bottom: 30px;
  @media only screen and (max-device-width: 480px) {
    width: 95%;
  }
`

const MainPage = () => (
  <MainContainer>
    <MainContent>
      <Suspense fallback={<span>Loading</span>}>
        <FilterCategories />
      </Suspense>
      <BooksList />
      <BooksForm />
    </MainContent>
  </MainContainer>
)

export default MainPage
