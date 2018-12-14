import { handleActions } from 'redux-actions'

export default handleActions(
  {
    CREATE_BOOK: (state, { payload: book }) => {
      console.log('book', book)
      return { ...state, [book.id]: book }
    },
    REMOVE_BOOK: (state, { payload: book }) => {
      const { [book.id]: omit, ...books } = state
      return { ...books }
    }
  },
  {}
)
