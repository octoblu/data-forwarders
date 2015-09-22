import React, { PropTypes } from "react";
import { Link } from "react-router";
import _ from "lodash";

var DataStoreListItem = React.createClass({
  propTypes: {
    store: PropTypes.object.isRequired,
    onSelection: PropTypes.func.isRequired
  },

  handleSelection: function() {
    const { onSelection, store } = this.props;
    onSelection(store);
  },

  render: function() {
    const { store } = this.props

    return (
      <div className="Card">
        <button onClick={this.handleSelection} key={store.uuid} store={store} className="Card-thumbnail">
          <img src={store.logoUrl} alt={store.name}/>
        </button>
        <p className="Card-label">{store.name}</p>
      </div>
    );
  }
});

module.exports = DataStoreListItem
