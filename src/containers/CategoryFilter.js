import React from 'react'
import { connect } from 'react-redux'
import { categories } from '../constants'
import { setFilter } from '../actions'

const CategoryFilter = ({ filter, setFilter }) => {
  const handleSetFilter = e => {
    const filter = e.target.value
    setFilter(filter)
  }

  return (
    <select value={filter} onChange={handleSetFilter}>
      {['All', ...categories].map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  )
}

const mapStateToProps = ({ filter }) => ({ filter })

export default connect(
  mapStateToProps,
  { setFilter }
)(CategoryFilter)
