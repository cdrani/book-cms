import React, { useState } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useMutation, useQuery } from 'react-apollo-hooks'

import { MYBOOKS } from '../constants'

const Select = styled.select`
  width: 52%;
  height: 40px;
  font-size: 1rem;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  opacity: 0.85;
  outline: 0;
  margin-bottom: 20px;
`

const extractCategories = ({ myBooks: { edges: books } }) => {
  const bookCategories = books.map(book => book.category)
  return [...new Set(bookCategories)]
}

const SETCATEGORYFILTER = gql`
  mutation SetCategoryFilter($category: String) {
    setCategoryFilter(category: $category) @client
  }
`

const FilterCategories = () => {
  const [filter, setFilter] = useState('All')
  const handleFilterChange = e => {
    const category = e.target.value
    setFilter(category)
    setLanguageFilter({ variables: { category } })
  }

  const setLanguageFilter = useMutation(SETCATEGORYFILTER)
  const { data } = useQuery(MYBOOKS, { variables: { input: { limit: 10 } } })
  const filterableCategories = extractCategories(data)

  return (
    <Select value={filter} onChange={handleFilterChange}>
      {['All', ...filterableCategories].map(category => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  )
}

export default FilterCategories
