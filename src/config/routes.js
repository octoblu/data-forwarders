var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../containers/app');
var Devices = require('../containers/devices');
var Forwarder = require('../containers/forwarders');
var ForwarderNew = require('../containers/forwarders-new');
var Login = require('../containers/login');
var NotFound = require('../containers/not-found');
var Session = require('../containers/session');
var StyleGuide = require('../containers/style-guide');


var routes = (
  <Route handler={App}>
    <Route name="login" path="login" handler={Login}/>
    <Route name="session" path="session" handler={Session}/>
    <Route name="forwarders" path="forwarders" handler={Forwarder}/>
    <Route name="forwarders-new" path="forwarders/new" handler={ForwarderNew}/>
    <Route name="devices" path="forwarders/:uuid/devices" handler={Devices}/>
    <Route name="style-guide" path="style-guide" handler={StyleGuide}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
