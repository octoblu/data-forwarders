import React from "react"

var DataStoreListItem = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired,
    onSelection: React.PropTypes.func.isRequired
  },

  handleClick: function(event){
    var isChecked = event.target.checked;

    if(isChecked){
       this.props.subscribeToDevice(this.props.device);
    } else {
      this.props.unsubscribeFromDevice(this.props.device);
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

module.exports = DataStoreListItem
