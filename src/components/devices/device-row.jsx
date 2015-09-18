import React, { PropTypes } from "react"

var DeviceTableRow = React.createClass({
  propTypes: {
    device: PropTypes.object.isRequired,
    isInSubscriptionList: PropTypes.bool,
    onSubscribeToDevice: PropTypes.func.isRequired,
    onUnsubscribeFromDevice: PropTypes.func.isRequired
  },

  handleToggle: function(event){
    var deviceUUID = this.props.device.uuid;

    if(event.target.checked){
       this.props.onSubscribeToDevice(deviceUUID);
    } else {
      this.props.onUnsubscribeFromDevice(deviceUUID);
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
