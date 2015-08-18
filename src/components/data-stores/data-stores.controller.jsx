import React from "react"
import SnapLoading from "../snap/loading"
import SnapEmptyState from "../snap/empty-state"
import DataStoreList from "./data-store-list"
import stores from "../../config/data-stores"

var DataStores = React.createClass({
  getInitialState: function() {
    return {
      stores: stores,
      isFetching: true
    }
  },

  componentDidMount: function(){
  },


  render: function() {
    return (
      <div>
        <SnapLoading collection={this.state.stores} isFetching={this.state.isFetching} />
        <h2>Data Stores</h2>

        { this.state.stores.length > 0 &&
          <DataStoreList stores={this.state.stores}/>
        }
      </div>
    )
  }
});

module.exports = DataStores
