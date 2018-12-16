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

export const LOGIN = gql`
  mutation SignIn($input: signInInput!) {
    signIn(input: $input) {
      token
    }
  }
`

export const SIGNUP = gql`
  mutation SignUp($input: signUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`
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

export const MYBOOKS = gql`
  query GetMyBooks($input: booksInput!) {
    myBooks(input: $input) {
      edges {
        __typename
        id
        title
        author
        category
        currentPage
        pages
        currentChapter
        chapters
      }

      pageInfo {
        endCursor
        hasNextPage
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
