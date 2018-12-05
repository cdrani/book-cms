import { combineReducers } from 'redux'
import books from './books'
import activeCategory from './activeCategory'

export default combineReducers({ books, activeCategory })
