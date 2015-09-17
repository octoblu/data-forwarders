import React, { PropTypes } from "react";
import _ from "lodash";

var DataStoreListItem = React.createClass({
  propTypes: {
    store: PropTypes.object.isRequired,
    onSelection: PropTypes.func.isRequired
  },

  handleSelection: function() {
    const { onSelection, store } = this.props
    onSelection(store.uuid);
  },

  render: function() {
    const { store } = this.props

    return (
      <button onClick={this.handleSelection} key={store.uuid} store={store}>
        {store.name}
      </button>
    );
  }
});

module.exports = DataStoreListItem
