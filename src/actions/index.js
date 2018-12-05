import { createAction } from 'redux-actions'
import { CREATE_BOOK, REMOVE_BOOK, SET_ACTIVE_CATEGORY } from './types'

export const setActiveCategory = createAction(SET_ACTIVE_CATEGORY)
export const createBook = createAction(CREATE_BOOK)
export const removeBook = createAction(REMOVE_BOOK)
