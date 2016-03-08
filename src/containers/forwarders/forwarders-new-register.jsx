import _ from "lodash"
import React from "react"
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import * as MeshbluActions from '../../actions/meshblu-actions';

var ForwarderNewRegister = React.createClass({
  componentDidMount: function() {
    const { dispatch, forwarder, meshblu } = this.props;
    // Register Forwarder Device
    dispatch(MeshbluActions.registerDevice(forwarder, meshblu.connection, this.subscriptionUpdate));
  },

  subscriptionUpdate: function() {
    const { forwarder, dispatch, meshblu, devices } = this.props;

    _.each(forwarder.subscriptions, function(subscriptionUUID) {
      dispatch(MeshbluActions.subscribeToDevice(subscriptionUUID, forwarder.uuid, meshblu.connection));
    });

    let deviceRecord = _.pick(forwarder, ['uuid', 'type', 'connector']);
    var gatebluDevice = _.findWhere(devices.gateblus, {uuid : forwarder.gateblu});

    dispatch(MeshbluActions.addDeviceToGateblu(gatebluDevice, deviceRecord, meshblu.connection));
    dispatch(push(null, '/forwarders'));
  },

  render: function() {
    return (
      <div>
        <h4>Register Device</h4>
        <p>Registering...</p>
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