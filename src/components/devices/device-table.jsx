import React from "react"
import meshblu from "meshblu"
import _ from "lodash"

import DeviceRow from "./device-row"

var DeviceTable = React.createClass({
  propTypes: {
    devices: React.PropTypes.array.isRequired,
    subscriptions: React.PropTypes.array.isRequired,
    onSubscribeToDevice: React.PropTypes.func.isRequired,
    onUnsubscribeFromDevice: React.PropTypes.func.isRequired,
    onSubscribeToAllDevices: React.PropTypes.func.isRequired,
    onUnsubscribeFromAllDevices: React.PropTypes.func.isRequired
  },

  toggleSelectionForAllDevices: function(e) {
    if (e.target.checked) {
      this.props.onSubscribeToAllDevices(this.props.devices);
    } else {
      this.props.onUnsubscribeFromAllDevices();
    }
  },

  renderDeviceRow: function(device) {
    var isInSubscriptionList = !!_.findWhere(this.props.subscriptions, {"uuid": device.uuid})


    return (
      <DeviceRow
        device={device}
        isInSubscriptionList={isInSubscriptionList}
        subscribeToDevice={this.props.onSubscribeToDevice}
        unsubscribeFromDevice={this.props.onUnsubscribeFromDevice}
        key={device.uuid} />
    );
  },

  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={this.props.subscriptions.length === this.props.devices.length}
                onChange={this.toggleSelectionForAllDevices}/>
            </th>
            <th>UUID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {_.map(this.props.devices, this.renderDeviceRow)}
        </tbody>
      </table>
    );
  }
});

module.exports = DeviceTable
