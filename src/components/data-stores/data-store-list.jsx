import React from "react"
import _ from "lodash"


var DataStoreList = React.createClass({
  propTypes: {
    stores: React.PropTypes.array.isRequired
  },

  renderListItem: function(store) {

    console.log(store);
    return (
      <a href={"/data-store/" + store.name}>{store.name}</a>
    )
  },

  render: function() {
    var stores = _.map(this.props.stores, this.renderListItem)
    return (
      <div>
        {stores}
      </div>
    );
  }
});

module.exports = DataStoreList
