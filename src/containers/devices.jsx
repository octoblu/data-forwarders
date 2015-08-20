import React from "react"
import { bindActionCreators } from 'redux';
import meshblu from "meshblu"
import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"
import DeviceTable from "../components/devices/device-table"
import ForwarderActions from "../actions/forwarders.actions"
import { connect } from 'react-redux';


var Devices = React.createClass({
  render: function() {
    var actions = bindActionCreators(ForwarderActions, this.props.dispatch);
    return (
      <div>
        <SnapLoading collection={this.props.devices.devices} isFetching={this.props.devices.isFetching} />
        <SnapEmptyState collection={this.props.devices.devices} isFetching={this.props.devices.isFetching} />

        {this.props.devices.devices.length > 0 &&
          <DeviceTable
            devices={this.props.devices.devices}
            subscriptions={this.props.devices.devices}
            onSubscribeDevice={actions.subscribeDevice}
            onUnsubscribeDevice={actions.unsubscribeDevice}
            onSubscribeAllDevices={actions.subscribeAllDevices}
            onUnsubscribeAllDevices={actions.unsubscribeAllDevices} />
        }
      </div>
    )
  }
});

function select(state) {
  console.log('STATE', state.devices);
  return {
    devices: state.devices
  };
}
module.exports =  connect(select)(Devices);
