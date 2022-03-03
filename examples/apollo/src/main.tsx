import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { GraphApolloLink } from '@graphprotocol/client-apollo'
import { getBuiltGraphClient } from '../.graphclient'

const client = new ApolloClient({
  link: new GraphApolloLink(getBuiltGraphClient),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
