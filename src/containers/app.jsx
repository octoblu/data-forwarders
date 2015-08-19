import React from 'react'
import { RouteHandler } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import reducers from '../reducers/'


const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

const store = finalCreateStore(reducers);

var App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() {
          return (
          <div>
            <h1>App</h1>
            <RouteHandler />

            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
          </div>
          )
        }}
      </Provider>
    );
  }
});

module.exports = App;
