import { combineReducers } from 'redux'
import books from './books'
import activeCategory from './activeCategory'
import setTitle from './setTitle'

export default combineReducers({ books, activeCategory, setTitle })
