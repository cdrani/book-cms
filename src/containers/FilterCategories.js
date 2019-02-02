import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { graphql, compose } from 'react-apollo'

import {
  ADDTOFILTERABLECATEGORIES,
  MYBOOKS,
  GETCATEGORYFILTER,
  GETFILTERABLECATEGORIES,
  SETCATEGORYFILTER
} from '../constants'

const Select = styled.select`
  display: flex;
  align-self: flex-end;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;
  margin-bottom: 20px;
  padding: 10px;
`

const extractCategories = books => {
  const bookCategories = books.map(book => book.category)
  return [...new Set(bookCategories)]
}

const FilterCategories = ({
  filter: { category },
  setCategory,
  categories,
  addToCategories
}) => {
  const bookQuery = useQuery(MYBOOKS, { variables: { input: { limit: 10 } } })

  if (bookQuery.data.myBooks) {
    const books = bookQuery.data.myBooks.edges
    const bookCategories = extractCategories(books)
    addToCategories({
      variables: { cats: bookCategories }
    })
  }

  const handleCategoryUpdate = e => {
    setCategory({ variables: { category: e.target.value } })
  }

  return (
    <Select value={category} onChange={handleCategoryUpdate}>
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  )
}

export default compose(
  graphql(SETCATEGORYFILTER, { name: 'setCategory' }),
  graphql(ADDTOFILTERABLECATEGORIES, { name: 'addToCategories' }),
  graphql(GETCATEGORYFILTER, {
    props: ({ data: { filter } }) => ({ filter })
  }),
  graphql(GETFILTERABLECATEGORIES, {
    props: ({
      data: {
        filterable: { categories }
      }
    }) => ({ categories })
  })
)(FilterCategories)
