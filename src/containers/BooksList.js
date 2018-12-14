import React from 'react'
// import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

// import { removeBook } from '../actions'
import Book from '../components/Book'
import { getCurrentBook } from '../constants'

// const BooksList = ({ books, filter, removeBook, myBooks }) => {
//   console.log()
//   // console.log(books, filter)
//   // const isFilterable = filter !== 'All'
//   // const isFilterable = false

//   const renderBooks = () => {
//     // if (false) {
//       // const filteredBooksList = Object.values(books).filter(
//       //   book => book.category === filter
//       // )
//       // return filteredBooksList.map(book => (
//       //   <Book handleRemoveBook={removeBook} key={book.id} book={book} />
//       // ))
//     // } else {
//     //   return Object.values(books).map(book => (
//     //     <Book handleRemoveBook={removeBook} key={book.id} book={book} />
//     //   ))
//     // }
//     return <h1>Hi</h1>
//   }

//   return renderBooks()
// }

const BooksList = ({ currentBook }) => {
  console.log(currentBook)
  return currentBook.map(book => <Book key={book.id} book={book} />)
}

export default compose(
  graphql(getCurrentBook, {
    props: ({ data: { currentBook } }) => ({ currentBook })
  })
)(BooksList)

// const mapStateToProps = ({ books, filter }) => ({ books, filter })

// export default connect(
//   mapStateToProps,
//   { removeBook }
// )(BooksList)
