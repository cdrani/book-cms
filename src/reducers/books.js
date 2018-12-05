import { handleActions } from 'redux-actions'

const initialState = {
  1: {
    id: 1,
    title: 'Strides',
    category: 'Novel'
  },

  2: {
    id: 2,
    title: "Losing Joe's Place",
    category: 'Novel'
  }
}

export default handleActions(
  {
    CREATE_BOOK: (state, { payload: book }) => ({ ...state, [book.id]: book }),
    REMOVE_BOOK: (state, { payload: book }) => {
      const { [book.id]: omit, ...books } = state.books
      return {
        ...state,
        books
      }
    }
  },
  initialState
)
