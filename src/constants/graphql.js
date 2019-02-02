import gql from 'graphql-tag'

const ADDTOFILTERABLECATEGORIES = gql`
  mutation AddToFilterables($cats: [String!]!) {
    addToFilterables(cats: $cats) @client
  }
`

const CREATEBOOK = gql`
  mutation CreateBook($input: createBookInput!) {
    createBook(input: $input) {
      id
      title
      author
      category
      chapters
      pages
    }
  }
`

const GETCATEGORYFILTER = gql`
  query {
    filter @client {
      category
    }
  }
`

const GETFILTERABLECATEGORIES = gql`
  query {
    filterable @client {
      categories
    }
  }
`

const GETLOGINSTATUS = gql`
  query {
    auth @client {
      loggedIn
    }
  }
`

const UPDATELOGINSTATUS = gql`
  mutation UpdateLoginStatus($loggedIn: Boolean!) {
    updateLoginStatus(loggedIn: $loggedIn) @client
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

const SETCATEGORYFILTER = gql`
  mutation SetCategoryFilter($category: String!) {
    setCategoryFilter(category: $category) @client {
      filter {
        category
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

const DELETEBOOK = gql`
  mutation DeleteBook($input: deleteBookInput!) {
    deleteBook(input: $input)
  }
`

const EDITBOOK = gql`
  mutation EditBook($input: editBookInput!) {
    editBook(input: $input) {
      id
      title
      author
      category
      pages
      chapters
    }
  }
`

const UPDATEBOOKMARK = gql`
  mutation UpdateBookMark($input: updateBookMarkInput!) {
    updateBookMark(input: $input) {
      id
      title
      author
      category
      pages
      chapters
      currentChapter
      currentPage
    }
  }
`

export {
  ADDTOFILTERABLECATEGORIES,
  CREATEBOOK,
  DELETEBOOK,
  EDITBOOK,
  GETCATEGORYFILTER,
  GETFILTERABLECATEGORIES,
  GETLOGINSTATUS,
  MYBOOKS,
  SETCATEGORYFILTER,
  SIGNIN,
  SIGNUP,
  UPDATEBOOKMARK,
  UPDATELOGINSTATUS
}
