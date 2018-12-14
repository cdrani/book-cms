import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions'
import Book from '../components/Book'

const BooksList = ({ books, filter, removeBook }) => {
  console.log(books, filter)
  const isFilterable = filter !== 'All'

  const renderBooks = () => {
    if (isFilterable) {
      const filteredBooksList = Object.values(books).filter(
        book => book.category === filter
      )

      return filteredBooksList.map(book => (
        <Book handleRemoveBook={removeBook} key={book.id} book={book} />
      ))
    } else {
      return Object.values(books).map(book => (
        <Book handleRemoveBook={removeBook} key={book.id} book={book} />
      ))
    }
  }

  return renderBooks()
}

const mapStateToProps = ({ books, filter }) => ({ books, filter })

export default connect(
  mapStateToProps,
  { removeBook }
)(BooksList)
