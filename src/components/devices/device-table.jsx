import _ from 'lodash';
import React, { PropTypes } from 'react';
import meshblu from 'meshblu';

import SnapLoading from '../../components/snap/loading';
import DeviceRow from './device-row';

var DeviceTable = React.createClass({
  propTypes: {
    devices: PropTypes.array.isRequired,
    subscriptions: PropTypes.array.isRequired,
    onSubscribeToAllDevices: PropTypes.func.isRequired,
    onUnsubscribeFromAllDevices: PropTypes.func.isRequired,
    onSubscribeToDevice: PropTypes.func.isRequired,
    onUnsubscribeFromDevice: PropTypes.func.isRequired,
    isFetching: PropTypes.bool
  },

  toggleSelectionForAllDevices: function(e) {
    if (e.target.checked) {
      const deviceUUIDs = _.pluck(this.props.devices, 'uuid');
      this.props.onSubscribeToAllDevices(deviceUUIDs);
    } else {
      this.props.onUnsubscribeFromAllDevices();
    }
  },

  renderDeviceRow: function(device) {
    const isInSubscriptionList = !!_.findWhere(this.props.subscriptions, device.uuid)

    return (
      <DeviceRow
        device={device}
        isInSubscriptionList={isInSubscriptionList}
        onSubscribeToDevice={this.props.onSubscribeToDevice}
        onUnsubscribeFromDevice={this.props.onUnsubscribeFromDevice}
        key={device.uuid} />
    );
  },

  render: function() {
    const { devices, isFetching } = this.props;

    if (isFetching) return <SnapLoading />;
    if (!isFetching && !devices.length ) {
      return (
        <div className="message EmptyState">
          <h4>You have no devices to subscribe to.</h4>
          <p>You can add some devices in <a href="//app.octoblu.com" target="_blank">Octoblu</a></p>
        </div>
      );
    }

    return (
      <table className="table-striped">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={this.props.subscriptions.length === devices.length}
                onChange={this.toggleSelectionForAllDevices}/>
            </th>
            <th>UUID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {_.map(devices, this.renderDeviceRow)}
        </tbody>
      </table>
    );
  }
});

module.exports = DeviceTable
