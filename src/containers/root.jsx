import React, { Component } from 'react';
import { ReduxRouter } from 'redux-react-router';
import { Route } from 'react-router';
import History from 'history';
import AppRoutes from '../config/routes';

import { Provider } from 'react-redux'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createStore from '../lib/create-store';

import * as MeshbluActions from '../actions/meshblu-actions';

let store = createStore();

function requireAuth(nextState, replaceState)  {
  const state = store.getState();
  if (!state.meshblu.connection) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

class Root extends Component {

  renderDebug() {
    if (process.env.NODE_ENV === 'production') return null;

    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          {function() {
            return <AppRoutes
                      requireAuth={requireAuth}
                      store={store} />
          }}
        </Provider>
        {this.renderDebug()}
      </div>
    );
  }
}

module.exports = Root;
