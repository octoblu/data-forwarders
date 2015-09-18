import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter } from 'redux-react-router';

import Devices from '../containers/devices';
import Forwarder from '../containers/forwarders';
import ForwarderNew from '../containers/forwarders/forwarders-new';
import ForwarderNewDataStore from '../containers/forwarders/forwarders-new-data-store';
import ForwarderNewOptions from '../containers/forwarders/forwarders-new-options';
import ForwarderNewGateblu from '../containers/forwarders/forwarders-new-gateblu';
import ForwarderNewSubscriptions from '../containers/forwarders/forwarders-new-subscriptions';
import ForwarderOptions from '../containers/forwarder-options';
import Login from '../containers/login';
import NotFound from '../containers/not-found';
import StyleGuide from '../containers/style-guide';

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

class AppRoutes extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={Forwarder}/>
        <Route path="/forwarders/new" component={ForwarderNew}>
          <IndexRoute component={ForwarderNewDataStore}/>
          <Route path="options" component={ForwarderNewOptions}/>
          <Route path="gateblu" component={ForwarderNewGateblu}/>
          <Route path="subscriptions" component={ForwarderNewSubscriptions}/>
        </Route>
        <Route path="forwarder/options" component={ForwarderOptions}/>
        <Route path="forwarders/:uuid/devices" component={Devices}/>
        <Route path="style-guide" component={StyleGuide}/>
        <Route path="login" component={Login}/>
      </ReduxRouter>
    );
  }
}

module.exports = AppRoutes;
