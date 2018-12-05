import React from 'react'

const BooksForm = () => {
  const categories = [
    'Novel',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ]

  return (
    <form>
      <input placeholder="title" />
      <select>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  )
}

export default BooksForm
