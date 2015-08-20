import _ from 'lodash';
import React, { PropTypes } from 'react';
import meshblu from 'meshblu';
import DeviceRow from './device-row';

var DeviceTable = React.createClass({
  propTypes: {
    devices: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    onSubscribeDevice: PropTypes.func.isRequired,
    onUnsubscribeDevice: PropTypes.func.isRequired,
    onSubscribeAllDevices: PropTypes.func.isRequired,
    onUnsubscribeAllDevices: PropTypes.func.isRequired
  },

  componentDidMount: function() {
    console.log(this.props.actions);
  },

  toggleSelectionForAllDevices: function(e) {
    const { actions, devices } = this.props;

    if (e.target.checked) {
      actions.onSubscribeAllDevices(devices);
    } else {
      actions.onUnsubscribeAllDevices();
    }
  },

  renderDeviceRow: function(device) {
    const isInSubscriptionList = !!_.findWhere(this.props.subscriptions, {"uuid": device.uuid})

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
