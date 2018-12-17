import gql from 'graphql-tag'

const CREATEBOOK = gql`
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

const MYBOOKS = gql`
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

const SIGNIN = gql`
  mutation SignIn($input: signInInput!) {
    signIn(input: $input) {
      token
    }
  }
`

const SIGNUP = gql`
  mutation SignUp($input: signUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`

export { CREATEBOOK, MYBOOKS, SIGNIN, SIGNUP }
