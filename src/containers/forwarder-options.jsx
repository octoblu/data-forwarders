import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as DeviceActions from '../actions/devices-actions';

var ForwarderOptions = React.createClass({
  componentDidMount: function() {
    // this.props.dispatch(DeviceActions.fetchDevices(this.props.meshblu));
  },

  render: function() {
    let { forwarder } = this.props;

    console.log('Forwarder', forwarder);

    return (
      <div></div>
    )
  }
});

function mapStateToProps(state) {
  return {
    forwarder: state.forwarder,
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderOptions);
