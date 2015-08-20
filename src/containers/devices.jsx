import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DeviceActions from '../actions/devices.actions'
import * as ForwarderActions from '../actions/forwarders.actions'

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

    let {devices} = this.props;

    return (
      <div>
        <SnapLoading collection={devices.items} isFetching={devices.isFetching} />
        <SnapEmptyState collection={devices.items} isFetching={devices.isFetching} />

        {devices.items.length > 0 &&
          <DeviceTable
            devices={devices.items}
            subscriptions={devices.items}
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
