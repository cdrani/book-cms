import React from 'react'
import { Query } from 'react-apollo'

import Book from '../components/Book'
import { MYBOOKS } from '../constants'

const BooksList = () => {
  return (
    <Query query={MYBOOKS} variables={{ input: { limit: 5 } }}>
      {({ loading, error, data, client }) => {
        if (loading) return 'loading'
        if (error) {
          return error.toString()
        }

        const {
          myBooks: { edges: books }
        } = data
        return books.map(book => <Book key={book.id} book={book} />)
      }}
    </Query>
  )
}

export default BooksList
