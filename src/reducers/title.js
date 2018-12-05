import { handleActions } from 'redux-actions'

export default handleActions(
  {
    SET_TITLE: (state, { payload: title }) => title,
    CREATE_BOOK: (state, action) => ''
  },
  ''
)
