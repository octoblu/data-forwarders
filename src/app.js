var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  React.render(<Root params={state.params}/>, document.body);
});
