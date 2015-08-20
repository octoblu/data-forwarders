import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeviceActions from '../actions/devices.actions'
import ForwarderActions from '../actions/forwarders.actions'

import DeviceTable from '../components/devices/device-table'
import SnapLoading from '../components/snap/loading'
import SnapEmptyState from '../components/snap/empty-state'


var Devices = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices());
  },

  render: function() {
    var forwarderActions = bindActionCreators(ForwarderActions, this.props.dispatch);
    var deviceActions = bindActionCreators(DeviceActions, this.props.dispatch);

    return (
      <div>
        <SnapLoading collection={this.props.devices.devices} isFetching={this.props.devices.isFetching} />
        <SnapEmptyState collection={this.props.devices.devices} isFetching={this.props.devices.isFetching} />

        {this.props.devices.devices.length > 0 &&
          <DeviceTable
            devices={this.props.devices.devices}
            subscriptions={this.props.devices.devices}
            onSubscribeDevice={forwarderActions.subscribeDevice}
            onUnsubscribeDevice={forwarderActions.unsubscribeDevice}
            onSubscribeAllDevices={forwarderActions.subscribeAllDevices}
            onUnsubscribeAllDevices={forwarderActions.unsubscribeAllDevices} />
        }
      </div>
    );
  }
});

function select(state) {
  return {
    devices: state.devices
  };
}
module.exports =  connect(select)(Devices);
