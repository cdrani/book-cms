import React from 'react'
import { connect } from 'react-redux'
import { removeBook } from '../actions'
import Book from '../components/Book'

const BooksList = ({ books, removeBook }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(books).map(book => (
          <Book handleRemoveBook={removeBook} key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = ({ books }) => ({ books })

export default connect(
  mapStateToProps,
  { removeBook }
)(BooksList)
