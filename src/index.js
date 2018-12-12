import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { store } from './store'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const BOOKCMS_API = 'https://bookcms-api.herokuapp.com/graphql'

const httpLink = new HttpLink({
  uri: BOOKCMS_API
})

const cache = new InMemoryCache()

const client = new ApolloClient({ link: httpLink, cache })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
