import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.css'
import { createClient, Provider } from 'urql'
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [graphExchange(GraphClient)],
})

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
