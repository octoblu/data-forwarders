import React, { Component } from 'react';
import { ReduxRouter } from 'redux-react-router';
import { Route } from 'react-router';
import AppRoutes from '../config/routes';

import { Provider } from 'react-redux'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createStore from '../lib/create-store';

let store = createStore();

class Root extends Component {
  render() {
    return (
      <div className="grid-flex-container">
        <Provider store={store}>
          {function() {
            return <AppRoutes />
          }}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

module.exports = Root;
