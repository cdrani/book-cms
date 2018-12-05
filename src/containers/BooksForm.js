import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { setActiveCategory, setTitle, createBook } from '../actions'
import { categories } from '../constants'

const BooksForm = ({
  activeCategory,
  createBook,
  setActiveCategory,
  setTitle,
  title
}) => {
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
    const id = shortid.generate()
    const elements = e.target.elements
    const [title, category] = getFormFields(elements)
    createBook({ id, title, category })
  }

  const getFormFields = (elements, id) => {
    const fields = ['title', 'category']
    return fields.map(field => elements.namedItem(field).value)
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
  { setActiveCategory, setTitle, createBook }
)(BooksForm)
