import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'

import { store } from './store'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const BOOKCMS_API = 'https://bookcms-api.herokuapp.com/graphql'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: BOOKCMS_API
})

const stateLink = withClientState({
  cache
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      'x-token': token ? token : ''
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink, httpLink]),
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
