import React, { Fragment } from 'react'
import { Query } from 'react-apollo'

import Book from '../components/Book'
import { MYBOOKS } from '../constants'

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult
  }

  return {
    ...previousResult,
    myBooks: {
      ...previousResult.myBooks,
      ...fetchMoreResult.myBooks
    },
    edges: [...fetchMoreResult.myBooks.edges, ...previousResult.myBooks.edges],
    pageInfo: {
      endCursor: fetchMoreResult.myBooks.pageInfo.endCursor,
      hasNextPage: fetchMoreResult.myBooks.pageInfo.hasNextPage
    }
  }
}

const BooksList = () => {
  return (
    <Query query={MYBOOKS} variables={{ input: { limit: 5 } }}>
      {({ loading, data, fetchMore }) => {
        if (data === undefined || Object.keys(data).length === 0) {
          return <p>Add a new book below</p>
        }

        const {
          myBooks: { edges: books, pageInfo }
        } = data

        if (!Boolean(books.length)) {
          return <p>Add a new book below</p>
        }

        return (
          <Fragment>
            {books.map(book => (
              <Book key={book.id} book={book} pageInfo={pageInfo} />
            ))}
            {pageInfo.hasNextPage && (
              <button
                type="button"
                onClick={() =>
                  fetchMore({
                    variables: {
                      input: { limit: 5, cursor: pageInfo.endCursor }
                    },
                    updateQuery
                  })
                }
              >
                more
              </button>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}

export default BooksList
