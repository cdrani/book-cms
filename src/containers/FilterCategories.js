import React from 'react'
import styled from 'styled-components'
import { useQuery, useMutation } from 'react-apollo-hooks'

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

const FilterCategories = () => {
  const {
    data: {
      myBooks: { edges: books }
    }
  } = useQuery(MYBOOKS, { variables: { input: { limit: 10 } } })

  const {
    data: {
      filterable: { categories }
    }
  } = useQuery(GETFILTERABLECATEGORIES)

  const {
    data: {
      filter: { category }
    }
  } = useQuery(GETCATEGORYFILTER)

  const setCategory = useMutation(SETCATEGORYFILTER)

  const addToCategories = useMutation(ADDTOFILTERABLECATEGORIES)

  if (books && books.length) {
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

export default FilterCategories
