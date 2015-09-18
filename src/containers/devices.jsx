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
    const { devices, dispatch } = this.props;
    const { subDevices } = devices;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        { devices.isFetching &&
          <SnapLoading />
        }

        <SnapEmptyState collection={subDevices} isFetching={devices.isFetching} />

        {subDevices.length > 0 &&
          <DeviceTable
            devices={subDevices}
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
