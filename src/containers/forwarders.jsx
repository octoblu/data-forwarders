import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions'
import * as ForwarderActions from '../actions/forwarders-actions'

var Forwarders = React.createClass({
  componentDidMount: function() {
    console.log(this.props);
  },

  render: function() {
    return (
      <div>
        <h1 className="Page-title">Forwarders</h1>
        <Link to="forwarders.new" params={{userId: "123"}}>Create Forwarder</Link>
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
