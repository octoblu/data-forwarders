import React from "react"

import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"
import GatebluList from "../components/gateblus/gateblu-list"
import DataStoreList from "../components/data-stores/data-store-list"

var ForwarderNew = React.createClass({
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

module.exports = ForwarderNew



import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';

import ForwarderList from '../components/forwarders/forwarder-list';

var ForwarderNew = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    const { dataStores } = this.props;

    return (
      <div>
        <h2>Data Stores</h2>

        { dataStores.length > 0 &&
          <DataStoreList stores={dataStores}/>
        }
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    devices: state.devices,
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderNew);
