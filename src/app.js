var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});
