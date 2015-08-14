var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App}>
    <Route path="login" handler={Login}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
