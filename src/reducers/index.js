import { combineReducers } from 'redux'
import books from './books'
import activeCategory from './activeCategory'
import title from './title'
import filter from './filter'

export default combineReducers({ activeCategory, books, filter, title })
