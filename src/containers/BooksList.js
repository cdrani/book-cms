import React from 'react'
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
          return null
        }

        const {
          myBooks: { edges: books, pageInfo }
        } = data

        if (!books) {
          return <p>Add a new book below</p>
        }

        const filteredBooks = filterBooksByCategoryFilter(books, category)

        return (
          <>
            {filteredBooks &&
              filteredBooks.map(book => (
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
                More
              </Button>
            )}
          </>
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
