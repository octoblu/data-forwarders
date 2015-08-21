import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions'
import * as ForwarderActions from '../actions/forwarders-actions'
import DeviceTable from '../components/devices/device-table'
import SnapLoading from '../components/snap/loading'
import SnapEmptyState from '../components/snap/empty-state'


var Devices = React.createClass({
  mixins: [Navigation],

  componentWillReceiveProps: function() {
    if (!this.props.meshblu.connection) {
      this.transitionTo('login')
    }
  },

  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    let {devices, dispatch} = this.props;
    let forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <SnapLoading collection={devices.items} isFetching={devices.isFetching} />
        <SnapEmptyState collection={devices.items} isFetching={devices.isFetching} />

        {devices.items.length > 0 &&
          <DeviceTable
            devices={devices.items}
            subscriptions={[]}
            actions={forwarderActions}
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
    devices: state.devices,
    meshblu: state.meshblu
  };
}

module.exports =  connect(select)(Devices);
