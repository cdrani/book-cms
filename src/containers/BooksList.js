import React from 'react'
import { Query } from 'react-apollo'

import Book from '../components/Book'
import { MYBOOKS } from '../constants'

const BooksList = () => {
  return (
    <Query query={MYBOOKS}>
      {({ loading, error, data }) => {
        if (loading) return 'loading'
        if (error) return 'error'
        const { books } = data.me
        return books.map(book => <Book key={book.id} book={book} />)
      }}
    </Query>
  )
}

export default BooksList
