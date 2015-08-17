import React from "react"

var DeviceTableRow = React.createClass({
  propTypes: {
    device: React.PropTypes.object.isRequired,
    isInSubscriptionList: React.PropTypes.bool
  },

  render: function() {
    return (
      <tr>
        <td>
          <input type="checkbox" checked={this.props.isInSubscriptionList}/>
        </td>
        <td>{this.props.device.uuid}</td>
        <td>{this.props.device.name}</td>
        <td>{this.props.device.type || '-'}</td>
      </tr>
    )
  }
});

module.exports = DeviceTableRow
