import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setTitle } from '../actions'

const BooksForm = ({ activeCategory, setActiveCategory, setTitle, title }) => {
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

  const handleSetTitle = e => {
    const title = e.target.value
    setTitle(title)
  }

  return (
    <form>
      <input value={title} onChange={handleSetTitle} placeholder="title" />
      <select onChange={handleSetActiveCategory} value={activeCategory}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  )
}

const mapStateToProps = ({ activeCategory, title }) => ({
  activeCategory,
  title
})

export default connect(
  mapStateToProps,
  { setActiveCategory, setTitle }
)(BooksForm)
