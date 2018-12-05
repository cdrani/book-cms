import faker from 'faker'
import shortid from 'shortid'
import { categories } from './constants'

const randomCategory = () => {
  const { length: len } = categories
  return categories[Math.floor(Math.random() * len)]
}

const generateBook = () => {
  const id = shortid.generate()
  return {
    id,
    title: faker.random.words(),
    category: randomCategory()
  }
}

const generateBooks = num => {
  return Array.from({ length: num }, (v, i) => generateBook())
}

export const getBooks = num => {
  const booksObj = {}
  const books = generateBooks(num)

  books.forEach(book => {
    booksObj[book.id] = book
  })

  return booksObj
}
