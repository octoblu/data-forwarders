import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';

import * as ForwarderActions from '../../actions/forwarders-actions';

var ForwarderNewDevices = React.createClass({
  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Subscribe Devices</h2>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu
  };
};

export default connect(mapStateToProps)(ForwarderNewDevices);
