import React from "react"
import meshblu from "meshblu"
import SnapLoading from "../snap/loading"
import SnapEmptyState from "../snap/empty-state"
import DeviceTable from "./device-table"


var Devices = React.createClass({
  getInitialState: function() {
    return {
      devices: [],
      subscriptions: [],
      isFetching: true
    }
  },

  componentDidMount: function(){
    var devices = this;
    var meshbluConnection = meshblu.createConnection({
      uuid: "64e47761-294b-4f77-a7a4-c9a4cbfe64e2",
      token: "988f11704c01de29c16ee3ae1917e1db3de19927"
    });

    meshbluConnection.on('ready', function(results, error){
      console.log('Ready', results, error);
      if(!error){
        //get list of devices.
        meshbluConnection.mydevices({}, function(deviceResult, error){
          console.log(deviceResult);
          devices.setState({
            devices: deviceResult.devices,
            isFetching: false
          });
        });
      }
    });
  },

  toggleSubscriptionToAllDevices: function() {
    console.log('Select All');
  },

  subscribeToAllDevices: function() {
    var deviceUUIDs = _.pluck(this.state.devices, 'uuid')
    this.setState({
      subscriptions: deviceUUIDs
    });
  },

  unsubscribeFromAllDevices: function() {
    this.setState({
      subscriptions: []
    });
  },

  subscribeToDevice: function(device)  {
    console.log('Select Device: ', device);
  },

  render: function() {
    return (
      <div>
        <SnapLoading collection={this.state.devices} isFetching={this.state.isFetching} />
        <SnapEmptyState collection={this.state.devices} isFetching={this.state.isFetching} />

        {this.state.devices.length > 0 &&
          <DeviceTable
            devices={this.state.devices}
            subscriptions={this.state.subscriptions}
            onToggleSelection={this.toggleSubscriptionToAllDevices}/>
        }
      </div>
    )
  }
});

module.exports = Devices
