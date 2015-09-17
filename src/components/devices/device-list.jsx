import _ from 'lodash';
import React, { PropTypes } from 'react';
import DeviceListItem from './device-list-item';

const DeviceList = React.createClass({
  propTypes: {
    devices: PropTypes.array.isRequired
  },

  render: function() {
    const { devices } = this.props;

    console.log('Devices', devices);
    const listItems = _.map(devices, device => {
      return (<DeviceListItem device={device} key={device.uuid} />);
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
});

module.exports = DeviceList;
