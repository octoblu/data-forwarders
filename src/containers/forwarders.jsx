import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import ForwarderList from '../components/forwarders/forwarder-list';

import * as DeviceActions from '../actions/devices-actions';
import * as ForwarderActions from '../actions/forwarders-actions';

var Forwarders = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    const { devices } = this.props;

    return (
      <div className="grid-flex-container">
        <ForwarderList
          forwarders={devices.forwarders}
          isFetching={devices.isFetching}
          className="Page"/>
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
