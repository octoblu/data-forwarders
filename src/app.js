var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var routes = require('./config/routes');
var Login = require('./components/login');
var NotFound = require('./components/not-found');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler />
      </div>
    );
  }
});

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
