import { handleAction } from 'redux-actions'
import { SET_TITLE } from '../actions/types'

export default handleAction(
  SET_TITLE,
  (state, { payload: title }) => ({ title }),
  { title: '' }
)
