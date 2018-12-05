import React from 'react'
import { categories } from '../constants'

const CategoryFilter = () => (
  <select>
    {['All', ...categories].map(category => (
      <option>{category}</option>
    ))}
  </select>
)

export default CategoryFilter
