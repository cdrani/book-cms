import { handleAction } from 'redux-actions'
import { SET_ACTIVE_CATEGORY } from '../actions/types'

export default handleAction(
  SET_ACTIVE_CATEGORY,
  (state, { payload: activeCategory }) => activeCategory,
  'Novel'
)
