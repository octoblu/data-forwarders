var _ = require('lodash');
var React = require('react');
var meshblu = require('meshblu');

var DeviceRow = require('./device-row');

var DeviceTable = React.createClass({
  propTypes: {
    devices: React.PropTypes.array.isRequired,
    subscriptions: React.PropTypes.array.isRequired,
    onSubscribeDevice: React.PropTypes.func.isRequired,
    onUnsubscribeDevice: React.PropTypes.func.isRequired,
    onSubscribeAllDevices: React.PropTypes.func.isRequired,
    onUnsubscribeAllDevices: React.PropTypes.func.isRequired
  },

  toggleSelectionForAllDevices: function(e) {
    if (e.target.checked) {
      this.props.onSubscribeAllDevices(this.props.devices);
    } else {
      this.props.onUnsubscribeAllDevices();
    }
  },

  renderDeviceRow: function(device) {
    var isInSubscriptionList = !!_.findWhere(this.props.subscriptions, {"uuid": device.uuid})

    console.log('device', device);
    return (
      <DeviceRow
        device={device}
        isInSubscriptionList={isInSubscriptionList}
        subscribeToDevice={this.props.onSubscribeDevice}
        unsubscribeFromDevice={this.props.onUnsubscribeDevice}
        key={device.uuid} />
    );
  },

  render: function() {
    console.log('devices', this.props);

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
