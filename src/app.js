import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

import reducers from './reducers/'
import AppRoutes from './config/routes'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger(), routerMiddleware(browserHistory))

// Add the reducer to your store on the `routing` key
const store = createStore(reducers, createStoreWithMiddleware)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <AppRoutes history={history} />
  </Provider>,
  document.getElementById('app')
)
