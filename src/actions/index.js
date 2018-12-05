import { createAction } from 'redux-actions'
import {
  CREATE_BOOK,
  REMOVE_BOOK,
  SET_ACTIVE_CATEGORY,
  SET_FILTER,
  SET_TITLE
} from './types'

export const createBook = createAction(CREATE_BOOK)
export const removeBook = createAction(REMOVE_BOOK)
export const setActiveCategory = createAction(SET_ACTIVE_CATEGORY)
export const setFilter = createAction(SET_FILTER)
export const setTitle = createAction(SET_TITLE)
