import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { withClientState } from 'apollo-link-state'
import { BrowserRouter as Router } from 'react-router-dom'
import decode from 'jwt-decode'
import history from './history'

import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { GETFILTERABLECATEGORIES } from './constants'
const BOOKCMS_API = 'https://bookcms-api.herokuapp.com'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: BOOKCMS_API
})

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      setCategoryFilter: (_, { category }, { cache }) => {
        const data = {
          filter: {
            __typename: 'Filter',
            category
          }
        }

        cache.writeData({ data })
        return null
      },
      addToFilterables: (_, { cats }, { cache }) => {
        const {
          filterable: { categories }
        } = cache.readQuery({ query: GETFILTERABLECATEGORIES })

        const removeDups = [...new Set(categories.concat(cats))]

        const data = {
          filterable: {
            __typename: 'Filterable',
            categories: removeDups
          }
        }

        cache.writeData({ data })
        return null
      }
    }
  },
  defaults: {
    filter: {
      __typename: 'Filter',
      category: 'All'
    },
    filterable: {
      __typename: 'Filterable',
      categories: ['All']
    }
  }
})

const authLink = setContext((req, prev) => {
  const headers = {
    headers: {
      token: localStorage.getItem('token') || null,
      refreshtoken: localStorage.getItem('refreshToken') || null
    }
  }

  const {
    headers: { refreshtoken }
  } = headers

  if (refreshtoken) {
    const currentTime = Date.now().valueOf() / 1000
    const tokenExpiration = decode(refreshtoken).exp

    if (currentTime > tokenExpiration) {
      history.push('/signin')
    }
  }

  return headers
})

const afterwareLink = new ApolloLink((operation, forward) =>
  forward(operation).map(response => {
    const context = operation.getContext()
    const {
      response: { headers }
    } = context

    if (headers) {
      const token = headers.get('token')
      const refreshToken = headers.get('refreshtoken')
      if (token) {
        localStorage.setItem('token', token)
      }

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken)
      }
    }

    return response
  })
)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
    graphQLErrors.map(({ message = '', status = 200 }) => {
      if ('Not authenticated as user.' === message || status === 401) {
        if (
          history &&
          history.location & (history.location.pathname !== '/signin')
        ) {
          history.push('/signin')
        }
      }

      if ('FORBIDDEN' === message || status === 403) {
        history.push('/books')
      }

      return null
    })

    if (networkError && networkError.statusCode === 401) {
      history.push('/signin')
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    stateLink,
    afterwareLink,
    authLink,
    httpLink
  ]),
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
