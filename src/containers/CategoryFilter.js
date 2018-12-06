import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { categories } from '../constants'
import { setFilter } from '../actions'


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

const CategoryFilter = ({ filter, setFilter }) => {
  const handleSetFilter = e => {
    const filter = e.target.value
    setFilter(filter)
  }

  return (
    <Select value={filter} onChange={handleSetFilter}>
      {['All', ...categories].map(category => (
        <option key={category}>{category}</option>
      ))}
    </Select>
  )
}

const mapStateToProps = ({ filter }) => ({ filter })

export default connect(
  mapStateToProps,
  { setFilter }
)(CategoryFilter)
