import React from "react"
import { bindActionCreators } from 'redux';
import meshblu from "meshblu"
import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"
import DeviceTable from "../components/devices/device-table"
import DeviceActions from "../actions/devices"
import { connect } from 'react-redux';


var Devices = React.createClass({
  getInitialState: function() {
    return {
      devices: [],
      isFetching: true
    }
  },

  componentDidMount: function(){
    var devices = this;

    var meshbluConnection = meshblu.createConnection({
      uuid: "64e47761-294b-4f77-a7a4-c9a4cbfe64e2",
      token: "988f11704c01de29c16ee3ae1917e1db3de19927"
    });

    meshbluConnection.on('ready', function(connection){
      console.log('Ready', connection);
      //get list of devices.
      meshbluConnection.mydevices({}, function(deviceResult, error){
        devices.setState({
          devices: deviceResult.devices,
          isFetching: false
        });
      });
    });
  },

  render: function() {
    var actions = bindActionCreators(DeviceActions, this.props.dispatch);

    return (
      <div>
        <SnapLoading collection={this.state.devices} isFetching={this.state.isFetching} />
        <SnapEmptyState collection={this.state.devices} isFetching={this.state.isFetching} />

        {this.state.devices.length > 0 &&
          <DeviceTable
            devices={this.state.devices}
            subscriptions={this.props.devices}
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
  return {
    devices: state.devices
  };
}
module.exports =  connect(select)(Devices);
