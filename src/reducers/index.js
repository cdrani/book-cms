import { combineReducers } from 'redux'
import books from './books'
import activeCategory from './activeCategory'
import title from './title'

export default combineReducers({ books, activeCategory, title })
