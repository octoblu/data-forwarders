import React, { Component } from 'react';
import { ReduxRouter } from 'redux-react-router';
import { Route } from 'react-router';
import AppRoutes from '../config/routes';

import Forwarder from '../containers/forwarders';
import Devices from '../containers/devices';
import ForwarderNew from '../containers/forwarders/forwarders-new';
import ForwarderNewDataStore from '../containers/forwarders/forwarders-new-data-store';
import ForwarderNewOptions from '../containers/forwarders/forwarders-new-options';
import ForwarderNewGateblu from '../containers/forwarders/forwarders-new-gateblu';
import ForwarderNewDevices from '../containers/forwarders/forwarders-new-devices';
import ForwarderOptions from '../containers/forwarder-options';
import Login from '../containers/login';
import NotFound from '../containers/not-found';
import StyleGuide from '../containers/style-guide';

import { Provider } from 'react-redux'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createStore from '../lib/create-store';

let store = createStore();

class App extends Component {
  render() {
    return (
      <div>
        <h2>Yay</h2>
      </div>
    );
  }
}

class Root extends Component {
  render() {
    return (
      <div>
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
