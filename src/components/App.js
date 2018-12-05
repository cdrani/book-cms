import React, { Component } from 'react'
import BooksList from './BooksList'
//import BooksForm from './BooksForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksList />
        {/* <BooksForm /> */}{' '}
      </div>
    )
  }
}

export default App
