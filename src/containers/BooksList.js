import React from 'react'
import { graphql, compose } from 'react-apollo'

import Book from '../components/Book'
import { getCurrentBook } from '../constants'

const BooksList = ({ currentBook }) =>
  currentBook.map(book => <Book key={book.id} book={book} />)

export default compose(
  graphql(getCurrentBook, {
    props: ({ data: { currentBook } }) => ({ currentBook })
  })
)(BooksList)
