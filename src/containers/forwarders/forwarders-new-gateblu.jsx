import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ForwarderActions from '../../actions/forwarders-actions';
import * as DeviceActions from '../../actions/devices-actions';

import DeviceList from '../../components/devices/device-list';

var ForwarderNewGateblu = React.createClass({
  componentDidMount: function() {
    const { dispatch, meshblu } = this.props;
    const deviceActions = bindActionCreators(DeviceActions, dispatch);

    deviceActions.fetchDevices(meshblu);
  },

  render: function() {
    const { dispatch, devices } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h3>Select Gateblu</h3>
        <p>Pick a Gateblu device that will manage and run your forwarder</p>
        <DeviceList devices={devices.gateblus} onSelection={forwarderActions.addGateblu} isFetching={devices.isFetching} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    devices : state.devices
  };
};

export default connect(mapStateToProps)(ForwarderNewGateblu);
