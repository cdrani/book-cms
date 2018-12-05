import React from 'react'
import { connect } from 'react-redux'
import Book from '../components/Book'

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(books).map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
)

const mapStateToProps = ({ books }) => ({ books })

export default connect(
  mapStateToProps,
  null
)(BooksList)
