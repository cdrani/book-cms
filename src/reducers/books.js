import { handleActions } from 'redux-actions'
import { getBooks } from '../static-data'

export default handleActions(
  {
    CREATE_BOOK: (state, { payload: book }) => ({ ...state, [book.id]: book }),
    REMOVE_BOOK: (state, { payload: book }) => {
      const { [book.id]: omit, ...books } = state
      return { ...books }
    }
  },
  getBooks(20)
)
