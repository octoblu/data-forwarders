import React from 'react'
import { RouteHandler } from 'react-router'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import reducers from '../reducers/'
var store = createStore(reducers);

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

module.exports = App;
