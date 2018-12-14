import { createAction } from 'redux-actions'
import {
  CREATE_BOOK,
  REMOVE_BOOK,
  SET_FILTER
} from './types'

export const createABook = createAction(CREATE_BOOK)
export const removeBook = createAction(REMOVE_BOOK)
export const setFilter = createAction(SET_FILTER)
