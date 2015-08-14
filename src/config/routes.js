var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../components/app');
var Login = require('../components/login');
var NotFound = require('../components/not-found');

var routes = (
  <Route handler={App}>
    <Route path="login" handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
