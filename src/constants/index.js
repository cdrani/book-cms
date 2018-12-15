import gql from 'graphql-tag'

export const categories = [
  'Novel',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi'
]

export const CREATEBOOK = gql`
  mutation CreateBook($input: createBookInput!) {
    createBook(input: $input) {
      id
      title
      author
      category
      currentPage
      pages
      currentChapter
      chapters
    }
  }
`

export const GETBOOKS = gql`
  query GetBooks($input: booksInput!) {
    books(input: $input) {
      edges {
        id
        title
        author
        category
        currentPage
        pages
        currentChapter
        chapters
      }
    }
  }
`

export const addNewBook = gql`
  mutation addNewBook($input: createBookInput!) {
    addNewBook(input: $input) {
      id
      title
      author
      category
      currentPage
      pages
      currentChapter
      chapters
  }
}
`

export const myBooks = gql`
  query Me {
    books {
      title
      author
      category
      currentChapter
      chapters
      currentPage
      pages
    }
  }
`

export const getCurrentBook = gql`
  query {
    currentBook @client {
      id
      title
      author
      category
      pages
      currentPage
      chapters
      currentChapter
    }
  }
`
