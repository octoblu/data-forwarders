import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';
import * as DeviceActions from '../../actions/devices-actions';
import DeviceTable from '../../components/devices/device-table';

var ForwarderNewSubscriptions = React.createClass({
  componentDidMount: function() {
    const { dispatch, meshblu } = this.props;
    const deviceActions = bindActionCreators(DeviceActions, dispatch);

    deviceActions.fetchDevices(meshblu);
  },

  render: function() {
    const { devices, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h4>Subscribe Devices</h4>
        <p>Pick the devices you would like to spy on, messages sent from and to your devices will
          be forwarded to the datastore.
        </p>

        <DeviceTable
          devices={devices.subDevices}
          isFetching={devices.isFetching}
          onSubscribeToDevice={forwarderActions.subscribeToDevice}
          onSubscribeToAllDevices={forwarderActions.subscribeToAllDevices}
          onUnsubscribeFromDevice={forwarderActions.unsubscribeFromDevice}
          onUnsubscribeFromAllDevices={forwarderActions.unsubscribeFromAllDevices}
          subscriptions={forwarder.subscriptions}
          />

        <Link to="/forwarders/new/register">Register Your Forwarder</Link>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    devices: state.devices,
    forwarder: state.forwarder
  };
};

export default connect(mapStateToProps)(ForwarderNewSubscriptions);
