import React from 'react';
import Router, { Route, NotFoundRoute } from 'react-router';

import Root from '../containers/root';
import Devices from '../containers/devices';
import Forwarder from '../containers/forwarders';
import ForwarderNew from '../containers/forwarders/forwarders-new';
import ForwarderNewDataStore from '../containers/forwarders/forwarders-new-data-store';
import ForwarderNewOptions from '../containers/forwarders/forwarders-new-options';
import ForwarderNewGateblu from '../containers/forwarders/forwarders-new-gateblu';
import ForwarderNewDevices from '../containers/forwarders/forwarders-new-devices';
import ForwarderOptions from '../containers/forwarder-options';
import Login from '../containers/login';
import NotFound from '../containers/not-found';
import StyleGuide from '../containers/style-guide';

const routes = (
  <Route handler={Root}>
    <Route name="forwarders.index" path="/" handler={Forwarder}/>
    <Route name="forwarders.new" path="/forwarders/new" handler={ForwarderNew}>
      <Route name="forwarders.new.dataStore" path="data-store" handler={ForwarderNewDataStore}/>
      <Route name="forwarders.new.options" path="options" handler={ForwarderNewOptions}/>
      <Route name="forwarders.new.gateblu" path="gateblu" handler={ForwarderNewGateblu}/>
      <Route name="forwarders.new.devices" path="devices" handler={ForwarderNewDevices}/>
    </Route>
    <Route name="forwarder.options" path="forwarder/options" handler={ForwarderOptions}/>
    <Route name="devices" path="forwarders/:uuid/devices" handler={Devices}/>
    <Route name="style-guide" path="style-guide" handler={StyleGuide}/>
    <Route name="login" path="login" handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
