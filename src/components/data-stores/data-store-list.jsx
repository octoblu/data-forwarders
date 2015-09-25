import React, { PropTypes } from "react"
import _ from "lodash"

import DataStoreListItem from './data-store-list-item';


var DataStoreList = React.createClass({
  propTypes: {
    stores: PropTypes.array.isRequired,
    onSelection: PropTypes.func.isRequired
  },

  renderListItem: function(store) {
    return (
      <DataStoreListItem
        store={store}
        onSelection={this.props.onSelection}
        key={store.uuid}>
        {store.name}
      </DataStoreListItem>
    );
  },

  render: function() {
    var stores = _.map(this.props.stores, this.renderListItem)
    return (
      <div className="Cards">
        {stores}
      </div>
    );
  }
});

module.exports = DataStoreList
