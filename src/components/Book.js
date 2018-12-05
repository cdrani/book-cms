import React from 'react'

const Book = ({ book, handleRemoveBook }) => {
  const handleClick = () => {
    handleRemoveBook(book)
  }

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  )
}

export default Book
