import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';

import DeviceList from '../components/devices/device-list';

var Forwarders = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    const { devices } = this.props;

    return (
      <div>
        <h1 className="Page-title">Forwarders</h1>
        <DeviceList devices={devices.forwarders} isFetching={devices.isFetching} />
        <Link to="forwarders.new" params={{userId: "123"}}>Create Forwarder</Link>
        <Link to="devices" params={{uuid: "123"}}>Devices</Link>
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

export default connect(mapStateToProps)(Forwarders);
