import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../../actions/devices-actions';
import * as ForwarderActions from '../../actions/forwarders-actions';
import * as MeshbluActions from '../../actions/meshblu-actions';

var ForwarderNewRegister = React.createClass({
  componentDidMount: function() {
    const { dispatch, forwarder, meshblu } = this.props;
    dispatch(MeshbluActions.registerDevice(forwarder, meshblu.connection, this.subscriptionUpdate));
  },

  subscriptionUpdate: function() {
    const{forwarder, dispatch, meshblu, devices} = this.props;
    _.each(forwarder.subscriptions, function(subscriptionUUID) {
      console.log('Zing!', subscriptionUUID, forwarder.uuid);
      dispatch(MeshbluActions.subscribeToDevice(subscriptionUUID, forwarder.uuid, meshblu.connection));
    })
    let deviceRecord = _.pluck(forwarder, ['uuid', 'type', 'connector']);
    var gatebluDevice = _.findWhere(devices.gateblus, {uuid : forwarder.gateblu});
    dispatch(MeshbluActions.addDeviceToGateblu(gatebluDevice, deviceRecord, meshblu.connection));
  },

  getState: function() {
    const {forwarder} = this.props;
    if (forwarder.state === 'CREATING') {
      return 'Creating a Meshblu device for your forwarder...';
    }
    if (forwarder.state === 'UPDATING_DEVICE_SUBSCRIPTIONS') {
      return 'Adding message subscriptions to devices';
    }
    if (forwarder.state === 'UPDATING_GATEBLU'){
      return 'Adding forwarder to Gateblu device list';
    }
    return 'Registering....';
  },

  render: function() {
    const { devices, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Register Device</h2>

        {this.getState()}
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

export default connect(mapStateToProps)(ForwarderNewRegister);
