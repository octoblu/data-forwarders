import React from 'react'
import { RouteHandler } from 'react-router'
import { Provider } from 'react-redux'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createStore from '../lib/create-store';

let store = createStore();

var Root = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() {
          return (
          <div>
            <h1>App Layout</h1>

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

module.exports = Root;
