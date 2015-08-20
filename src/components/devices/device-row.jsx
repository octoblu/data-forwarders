import React, { PropTypes } from "react"

var DeviceTableRow = React.createClass({
  propTypes: {
    device: PropTypes.object.isRequired,
    isInSubscriptionList: PropTypes.bool,
    subscribeToDevice: PropTypes.func.isRequired,
    unsubscribeFromDevice: PropTypes.func.isRequired
  },

  handleToggle: function(event){
    var device = this.props.device;

    if(event.target.checked){
       this.props.subscribeToDevice(device);
    } else {
      this.props.unsubscribeFromDevice(device);
    }
  },

  render: function() {
    return (
      <tr>
        <td>
          <input type="checkbox" checked={this.props.isInSubscriptionList} onChange={this.handleToggle}/>
        </td>
        <td>{this.props.device.uuid}</td>
        <td>{this.props.device.name}</td>
        <td>{this.props.device.type || '-'}</td>
      </tr>
    )
  }
});

module.exports = DeviceTableRow
