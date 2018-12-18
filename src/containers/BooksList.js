import React, { Fragment } from 'react'
import { Query, compose, graphql } from 'react-apollo'

import Book from '../components/Book'
import { Button, MYBOOKS, GETCATEGORYFILTER } from '../constants'

const filterBooksByCategoryFilter = (data, selectedCategory) =>
  selectedCategory === 'All'
    ? data
    : data.filter(book => book.category === selectedCategory)

const updateQuery = (
  previousResult,
  { fetchMoreResult }
) => selectedCategory => {
  if (!fetchMoreResult) {
    return previousResult
  }

  fetchMoreResult = filterBooksByCategoryFilter(
    fetchMoreResult,
    selectedCategory
  )

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

const BooksList = ({ category, categories }) => {
  return (
    <Query query={MYBOOKS} variables={{ input: { limit: 5 } }}>
      {({ loading, data, fetchMore }) => {
        if (data === undefined || Object.keys(data).length === 0) {
          return <p>Add a new book below</p>
        }

        const {
          myBooks: { edges: books, pageInfo }
        } = data

        const fileteredBooks = filterBooksByCategoryFilter(books, category)

        if (!Boolean(books.length)) {
          return <p>Add a new book below</p>
        }

        return (
          <Fragment>
            {fileteredBooks.map(book => (
              <Book key={book.id} book={book} pageInfo={pageInfo} />
            ))}
            {pageInfo.hasNextPage && (
              <Button
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
              </Button>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}

export default compose(
  graphql(GETCATEGORYFILTER, {
    props: ({
      data: {
        filter: { category }
      }
    }) => ({ category })
  })
)(BooksList)
