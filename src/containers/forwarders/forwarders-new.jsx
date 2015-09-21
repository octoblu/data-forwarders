import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';
import * as MeshbluActions from '../../actions/meshblu-actions';

import DataStoreList from '../../components/data-stores/data-store-list';

var ForwarderNew = React.createClass({
  registerForwarder: function()   {
    const { dispatch, forwarder, meshblu } = this.props;
    dispatch(MeshbluActions.registerDevice(forwarder, meshblu.connection));
  },

  updateDevice: function()   {
    const { dispatch, devices, meshblu } = this.props;
    let device = devices.subDevices[0]
    device.armed = true;

    dispatch(MeshbluActions.updateDevice(device, meshblu.connection));
  },

  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h3>Create Meshblu Forwarder</h3>
        <Link to="/forwarders/new">New Forwarder</Link>

        <button onClick={this.registerForwarder}>Register Forwarder</button>
        <button onClick={this.updateDevice}>Update Device</button>

        <ul className="crumbs">
          { forwarder.dataStore && <li>1. {}</li> }
          { forwarder.options && <li>2.</li> }
          { forwarder.gateblu && <li>3.</li> }
          { !!forwarder.subscriptions.length && <li>4.</li> }
        </ul>

        { this.props.children }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    dataStores: state.dataStores,
    devices: state.devices,
    forwarder: state.forwarder,
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderNew);
