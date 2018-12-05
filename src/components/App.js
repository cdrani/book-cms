import React, { Component } from 'react'
import BooksList from '../containers/BooksList'
import BooksForm from '../containers/BooksForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksList />
        <BooksForm />
      </div>
    )
  }
}

export default App
