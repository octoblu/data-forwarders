import React from "react"

import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"
import GatebluList from "../components/gateblus/gateblu-list"
import DataStoreList from "../components/data-stores/data-store-list"
import stores from "../config/data-stores"

var ForwarderNew = React.createClass({
  getInitialState: function() {
    return {
      stores: stores,
      isFetching: true
    }
  },

  render: function() {
    return (
      <div>
        <SnapLoading collection={this.state.stores} isFetching={this.state.isFetching} />
        <h2>Data Stores</h2>

        { this.state.stores.length > 0 &&
          <DataStoreList stores={this.state.stores}/>
        }

        <h2>Gateblus</h2>
        <GatebluList meshbluConnection={{}} />
      </div>
    )
  }
});

module.exports = ForwarderNew
