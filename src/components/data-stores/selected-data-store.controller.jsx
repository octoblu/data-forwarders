import React from "react"
import SnapLoading from "../snap/loading"
import SnapEmptyState from "../snap/empty-state"
import DataStoreListItem from "./data-store-list-item"
import stores from "../../config/data-stores"

var SelectedDataStore = React.createClass({
  getInitialState: function() {
    return {
      store: {},
      isFetching: true
    }
  },

  componentDidMount: function() {
    var store = _.findWhere(stores, {"name": this.props.params.name});
    this.setState({
      isFetching: false,
      store: store
    });
  },

  render: function() {
    console.log(this.props);
    return (
      <div>
        <SnapLoading collection={this.state.store} isFetching={this.state.isFetching} />
        <h2>Selected Store: {this.state.store.name}</h2>

        <h3>Select Gateblu</h3>

      </div>
    )
  }
});

module.exports = SelectedDataStore
