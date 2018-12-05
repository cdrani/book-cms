import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setTitle } from '../actions'
import { categories } from '../constants'

const BooksForm = ({ activeCategory, setActiveCategory, setTitle, title }) => {
  const handleSetActiveCategory = e => {
    const activeCategory = e.target.value
    setActiveCategory(activeCategory)
  }

  const handleSetTitle = e => {
    const title = e.target.value
    setTitle(title)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.elements)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={handleSetTitle}
        placeholder="title"
      />
      <select
        name="category"
        onChange={handleSetActiveCategory}
        value={activeCategory}
      >
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
