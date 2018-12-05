import React, { Component } from 'react'
import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'
import CategoryFilter from '../containers/CategoryFilter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryFilter />
        <BooksList />
        <BooksForm />
      </div>
    )
  }
}

export default App
