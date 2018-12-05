import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory } from '../actions'

const BooksForm = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    'Novel',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]

  const handleSetActiveCategory = e => {
    const activeCategory = e.target.value
    setActiveCategory(activeCategory)
  }

  return (
    <form>
      <input placeholder="title" />
      <select onChange={handleSetActiveCategory} value={activeCategory}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  )
}
const mapStateToProps = ({ activeCategory }) => ({ activeCategory })

export default connect(
  mapStateToProps,
  { setActiveCategory }
)(BooksForm)
