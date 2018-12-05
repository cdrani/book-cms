import { handleAction } from 'redux-actions'
import { SET_FILTER } from '../actions/types'

export default handleAction(
  SET_FILTER,
  (state, { payload: filter }) => filter,
  'All'
)
