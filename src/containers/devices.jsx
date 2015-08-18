import React from "react"
import meshblu from "meshblu"
import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"
import DeviceTable from "../components/devices/device-table"


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

    meshbluConnection.on('ready', function(connection){
      console.log('Ready', connection);
      //get list of devices.
      meshbluConnection.mydevices({}, function(deviceResult, error){
        console.log(deviceResult);
        devices.setState({
          devices: deviceResult.devices,
          isFetching: false
        });
      });
    });
  },

  toggleSubscriptionToAllDevices: function() {
    console.log('Select All');
  },

  subscribeToAllDevices: function() {
    var subscriptions = _.map(this.state.devices, function(device){
      return {"uuid" : device.uuid};
    });

    this.setState({ subscriptions: subscriptions });
  },

  unsubscribeFromAllDevices: function() {
    this.setState({
      subscriptions: []
    });
  },

  subscribeToDevice: function(device)  {
    var subscriptions = this.state.subscriptions;

    subscriptions.push(_.pick(device, 'uuid'));

    this.setState({
      subscriptions: subscriptions
    });
  },

  unsubscribeFromDevice: function(device) {
    var subscriptions = this.state.subscriptions;
    this.setState({
      subscriptions: _.reject(subscriptions, {"uuid" : device.uuid})
    });
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
            onSubscribeToDevice={this.subscribeToDevice}
            onUnsubscribeFromDevice={this.unsubscribeFromDevice}
            onSubscribeToAllDevices={this.subscribeToAllDevices}
            onUnsubscribeFromAllDevices={this.unsubscribeFromAllDevices} />
        }
      </div>
    )
  }
});

module.exports = Devices
