import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { graphql, compose } from 'react-apollo'

import {
  MYBOOKS,
  GETCATEGORYFILTER,
  SETCATEGORYFILTER
} from '../constants'

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

const FilterCategories = ({ filter: { category }, setCategory }) => {
  const { data } = useQuery(MYBOOKS, { variables: { input: { limit: 10 } } })
  const filterableCategories = extractCategories(data)

  return (
    <Select
      value={category}
      onChange={e => setCategory({ variables: { category: e.target.value } })}
    >
      {['All', ...filterableCategories].map(category => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  )
}

export default compose(
  graphql(SETCATEGORYFILTER, { name: 'setCategory' }),
  graphql(GETCATEGORYFILTER, {
    props: ({ data: { filter } }) => ({ filter })
  })
)(FilterCategories)
