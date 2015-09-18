import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeviceList from '../../components/devices/device-list';
import * as ForwarderActions from '../../actions/forwarders-actions';
import * as DeviceActions from '../../actions/devices-actions';
import EmptyState from '../../components/snap/empty-state';

var ForwarderNewGateblu = React.createClass({
  componentDidMount: function() {
    const { dispatch, meshblu } = this.props;
    const deviceActions = bindActionCreators(DeviceActions, dispatch);

    deviceActions.fetchDevices(meshblu);
  },

  render: function() {
    const { dispatch, gateblus } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        { gateblus.length > 0 &&
          <DeviceList devices={gateblus} />
        }

        <EmptyState collection={gateblus}>
          <h3>No Gateblu Devices</h3>
          <p>
            Go to <a href="https://app.octoblu.com" target="_blank">Octoblu</a> and add a Gateblu device
          </p>
        </EmptyState>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    meshblu: state.meshblu,
    gateblus : state.devices.gateblus
  };
};

export default connect(mapStateToProps)(ForwarderNewGateblu);
