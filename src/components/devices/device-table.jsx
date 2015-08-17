import React from "react"
import meshblu from "meshblu"
import _ from "lodash"

import DeviceRow from "./device-row"

var DeviceTable = React.createClass({
  propTypes: {
    devices: React.PropTypes.array.isRequired,
    onToggleSelection: React.PropTypes.func.isRequired
  },

  toggleSelection: function(e) {
    console.log('toggleSelection', e.target.checked);
    this.props.onToggleSelection();
  },

  renderDeviceRow: function(device) {
    return (
      <DeviceRow device={device} isInSubscriptionList={true} key={device.uuid} />
    );
  },

  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={this.toggleSelection}/></th>
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
