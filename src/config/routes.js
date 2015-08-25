import React from 'react';
import Router, { Route, NotFoundRoute } from 'react-router';

import Root from '../containers/root';
import Devices from '../containers/devices';
import Forwarder from '../containers/forwarders';
import ForwarderNew from '../containers/forwarders-new';
import Login from '../containers/login';
import NotFound from '../containers/not-found';
import StyleGuide from '../containers/style-guide';

const routes = (
  <Route handler={Root}>
    <Route name="forwarders.index" path="/" handler={Forwarder}/>
    <Route name="forwarders.new" path="forwarders/new" handler={ForwarderNew}/>
    <Route name="devices" path="forwarders/:uuid/devices" handler={Devices}/>
    <Route name="style-guide" path="style-guide" handler={StyleGuide}/>
    <Route name="login" path="login" handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
